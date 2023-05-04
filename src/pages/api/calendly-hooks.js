// for debugging this webhook, use ngrok to tunnel the local server to a public url
import { buffer } from 'micro'
import { getServiceSupabase } from '../../utils/supabaseClient'
import axios from 'axios'
import initStripe from 'stripe'
import { postmarkClient } from '../../utils/postmark'

const getCalendlyBookingData = (url) =>
  axios
    .request({
      method: 'GET',
      url: `${url}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.CALENDLY_API_KEY,
      },
    })
    .catch((error) =>
      console.log(
        `There was an error in the webhook fetching calendly session data: ${error}`
      )
    )

export default async (req, res) => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY)
  const supabase = getServiceSupabase()
  const body = (await buffer(req)).toString()
  const data = body ? JSON.parse(body) : null
  console.log('calendly webhook data>>>>>:', data)

  if (data) {
    // from the payload, get partial creation/cancellation of
    // calendly event data to update the database
    let {
      cancel_url,
      event,
      reschedule_url,
      rescheduled,
      new_invitee,
      tracking,
      payment,
      status,
      email,
      name,
    } = data?.payload

    // the rest of the cancellation/booking data to update db from calling the calendly
    // api to get the event's start time, location and cancellation
    const processCartCancellation = async (cartBookingId) => {
      const calendlyCancelPromise = getCalendlyBookingData(event)
      const calendlyCancelation = await calendlyCancelPromise
      console.log(
        'calendlyCancelation>>>>: ',
        calendlyCancelation.data.resource
      )

      const {
        status,
        updated_at,
        cancellation: { canceled_by, reason },
      } = calendlyCancelation.data.resource

      // now we have all the data to update the cancellation record in the supabase DB
      const { error: supaBookingCancelError } = await supabase
        .from('booking')
        .update({
          booking_updated_at: updated_at,
          rescheduled,
          status,
          modified_by: canceled_by,
          reason,
        })
        .eq('id', cartBookingId)

      if (supaBookingCancelError) {
        console.log(
          `Error canceling cart booking: ${supaBookingCancelError.message}`
        )
      }

      // this step is to check if the session is being rescheduled
      // as calendly cancels then rebooks session to reschedule,
      // we wait for the data from the cancel event and then fetch the new event and update db
      if (rescheduled && new_invitee !== null) {
        const newEvent = new_invitee.split('/invitees').shift()
        const calendlyRebookPromise = getCalendlyBookingData(newEvent)
        const calendlyRebooking = await calendlyRebookPromise
        console.log('calendlyRebooking>>>>: ', calendlyRebooking.data.resource)

        const {
          updated_at,
          status,
          start_time,
          location: { type, join_url },
        } = calendlyRebooking.data.resource

        // now we have all the data to update the cancellation record in the supabase DB
        const { error: supaRebookingError } = await supabase
          .from('booking')
          .update({
            booking_updated_at: updated_at,
            status,
            start_time,
            location: type,
            join_link: join_url,
          })
          .eq('id', cartBookingId)

        if (supaRebookingError) {
          console.log(
            `Error updating cart rebooking: ${supaRebookingError.message}`
          )
        }
      }
    }

    const processDirectCancellation = async (directBookingId) => {
      const calendlyCancelPromise = getCalendlyBookingData(event)
      const calendlyCancelation = await calendlyCancelPromise
      console.log(
        'calendlyCancelation>>>>: ',
        calendlyCancelation.data.resource
      )

      const {
        status,
        updated_at,
        cancellation: { canceled_by, reason },
      } = calendlyCancelation.data.resource

      // now we have all the data to update the cancellation record in the supabase DB
      const { error: supaBookingCancelError } = await supabase
        .from('booking')
        .update({
          booking_updated_at: updated_at,
          rescheduled,
          status,
          modified_by: canceled_by,
          reason,
        })
        .eq('direct_booking_id', directBookingId)

      if (supaBookingCancelError) {
        console.log(
          `Error canceling direct booking: ${supaBookingCancelError.message}`
        )
      }

      // this step is to check if the session is being rescheduled
      // as calendly cancels then rebooks session to reschedule,
      // we wait for the data from the cancel event and then fetch the new event and update db
      if (rescheduled && new_invitee !== null) {
        const newEvent = new_invitee.split('/invitees').shift()
        const calendlyRebookPromise = getCalendlyBookingData(newEvent)
        const calendlyRebooking = await calendlyRebookPromise
        console.log('calendlyRebooking>>>>: ', calendlyRebooking.data.resource)

        const {
          updated_at,
          status,
          start_time,
          location: { type, join_url },
        } = calendlyRebooking.data.resource

        // now we have all the data to update the cancellation record in the supabase DB
        const { error: supaRebookingError } = await supabase
          .from('booking')
          .update({
            booking_updated_at: updated_at,
            status,
            start_time,
            location: type,
            join_link: join_url,
          })
          .eq('direct_booking_id', directBookingId)

        if (supaRebookingError) {
          console.log(
            `Error updating direct rebooking: ${supaRebookingError.message}`
          )
        }
      }
    }

    const processCartBooking = async (cartBookingId) => {
      console.log('cartBookingId~~~~~~~:', cartBookingId)
      const calendlyCreatePromise = getCalendlyBookingData(event)
      const calendlyBooking = await calendlyCreatePromise
      console.log('calendlyBooking>>>>: ', calendlyBooking.data.resource)
      const {
        created_at,
        status,
        start_time,
        name: bookedSessionName,
        location: { type, join_url },
      } = calendlyBooking.data.resource

      // now we have all the data to update the record creation in the supabase DB
      const { error: supaBookingUpdateError } = await supabase
        .from('booking')
        .update({
          booking_created_at: created_at,
          cancel_url,
          reschedule_url,
          status,
          start_time,
          location: type,
          join_link: join_url,
        })
        .eq('id', cartBookingId)

      if (supaBookingUpdateError) {
        console.log(
          `Error updating cart booking: ${supaBookingUpdateError.message}`
        )
      }

      // i want to send a special email to parent consultation parents
      const regex = /parent consult/i
      if (regex.test(bookedSessionName)) {
        const firstName = name.split(' ')[0]
        const message = `
          Dear ${firstName},\r\n
          Thank you for booking in a Parent Consultation with The Therapy Place! You’ve taken the
          first and most important step to move forward with your child’s speech and language
          development. Thank you for choosing The Therapy Place to be part of your journey and we
          look forward to meeting you soon.\r\n\
          \r\n
          Reminder: this appointment will be with parents/guardians only.
        `

        const mailData = {
          To: email,
          From: 'nisha@thetherapyplaceuk.com',
          Subject: `Parent Consultation`,
          TextBody: message,
          HtmlBody: `
          Dear ${firstName},<br>
          Thank you for booking in a Parent Consultation with The Therapy Place! You’ve taken the
          first and most important step to move forward with your child’s speech and language
          development. Thank you for choosing The Therapy Place to be part of your journey and we
          look forward to meeting you soon.
          <p><strong>Reminder: this appointment will be with parents/guardians only.</strong></p>
        `,
          MessageStream: 'outbound',
        }
        await postmarkClient.sendEmail(mailData)
      }
    }

    const processDirectBooking = async (directBookingId, userId, sessionId) => {
      console.log('directDirectBookingId:', directBookingId)
      console.log('sessionId:', sessionId)
      console.log('userId:', userId)
      const calendlyCreatePromise = getCalendlyBookingData(event)
      const calendlyBooking = await calendlyCreatePromise
      console.log('calendlyBooking>>>>: ', calendlyBooking.data.resource)
      const {
        created_at,
        status,
        start_time,
        name: bookedSessionName,
        location,
      } = calendlyBooking.data.resource

      let charge
      if (payment) {
        charge = await stripe.charges.retrieve(payment?.external_id)
        console.log('charge:', charge)
      }

      // in the **calendly** popup widget (CalendlyBookingEmbed.js Component), we set:
      // 1. utmMedium: directBookingId, (this is a unique uuid we generate to track the booking session)
      // 2. utmContent: user.id,
      // 3. utmTerm: session.id

      // in **supabase**, we need to insert the payment and booking tables with the relevent column/row data
      const { data: supaPaymentInsertData, error: supaPaymentInsertError } =
        await supabase.from('payment').insert([
          {
            user_id: userId, // supabase prefers all column names to be lowercased
            therapy_session_id: Number(sessionId),
            status: (payment?.successful).toString(),
            amount: payment?.amount,
            charges_id: payment?.external_id,
            receipt_url: !charge ? '' : charge?.receipt_url,
          },
        ])
      if (supaPaymentInsertError) {
        console.log(
          `Error inserting direct booking payment: ${supaPaymentInsertError.message}`
        )
      }
      const paymentId = supaPaymentInsertData[0].id
      console.log('paymentId:', paymentId)
      const { error: supaBookingInsertError } = await supabase
        .from('booking')
        .insert([
          {
            user_id: userId, // supabase prefers all column names to be lowercased
            therapy_session_id: Number(sessionId),
            payment_id: paymentId,
            direct_booking_id: directBookingId,
            booking_created_at: created_at,
            status: status,
            start_time: new Date(start_time),
            location: location.type,
            join_link: location.join_url,
            cancel_url: cancel_url,
            reschedule_url: reschedule_url,
          },
        ])
      if (supaBookingInsertError) {
        console.log(
          `Error inserting direct booking: ${supaBookingInsertError.message}`
        )
      }

      // i want to send a special email to parent consultation parents
      const regex = /parent consult/i
      if (regex.test(bookedSessionName)) {
        const firstName = name.split(' ')[0]
        const message = `
          Dear ${firstName},\r\n
          Thank you for booking in a Parent Consultation with The Therapy Place! You’ve taken the
          first and most important step to move forward with your child’s speech and language
          development. Thank you for choosing The Therapy Place to be part of your journey and we
          look forward to meeting you soon.\r\n\
          \r\n
          Reminder: this appointment will be with parents/guardians only.
        `

        const mailData = {
          To: email,
          From: 'nisha@thetherapyplaceuk.com',
          Subject: `Parent Consultation`,
          TextBody: message,
          HtmlBody: `
          Dear ${firstName},<br>
          Thank you for booking in a Parent Consultation with The Therapy Place! You’ve taken the
          first and most important step to move forward with your child’s speech and language
          development. Thank you for choosing The Therapy Place to be part of your journey and we
          look forward to meeting you soon.
          <p><strong>Reminder: this appointment will be with parents/guardians only.</strong></p>
        `,
          MessageStream: 'outbound',
        }
        await postmarkClient.sendEmail(mailData)
      }
    }

    switch (true) {
      case data?.event === 'invitee.canceled' && !!tracking.utm_medium: //directBookingId
        processDirectCancellation(tracking.utm_medium) // directBookingId
        break

      case data?.event === 'invitee.created' && !!tracking.utm_medium: //directBookingId
        processDirectBooking(
          tracking.utm_medium, // directBookingId
          tracking.utm_content, // userId
          tracking.utm_term // sessionId
        )
        break

      case data?.event === 'invitee.canceled' && !!tracking.utm_source: //cartBookingId
        processCartCancellation(tracking.utm_source) // cartBookingId
        break

      case data?.event === 'invitee.created' && !!tracking.utm_source: //cartBookingId
        processCartBooking(tracking.utm_source) // cartBookingId
        break

      default:
        console.log(
          `Sorry, the calendly session did not return any data. Check if any of the required values are missing. This should not be possible!`
        )
    }
  }
  res.send({ received: true })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
