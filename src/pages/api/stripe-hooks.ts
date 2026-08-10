import initStripe from 'stripe'
import { buffer } from 'micro'
import axios from 'axios'
import { getServiceSupabase } from '../../utils/supabaseClient'
import { postmarkClient } from '../../utils/postmark'

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req, res) => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY)
  const supabase = getServiceSupabase()
  const signature = req.headers['stripe-signature']
  const signingSecret = process.env.STRIPE_SIGNING_SECRET
  const reqBuffer = await buffer(req)

  let event
  try {
    event = stripe.webhooks.constructEvent(reqBuffer, signature, signingSecret)
    console.log('event:', event)
  } catch (error) {
    console.log(error)
    return res.status(400).send(`Webhook error: ${error.message}`)
  }

  // 0. I want to pass the checkout session id to each row in the payment table
  const checkoutSessionId = event.data.object.id
  // 1. get user, quantity and calendly_owner_url from payload (event.data.object.metadata)
  const { userId, ...rest } = event.data.object.metadata

  // 2. because stripe doesn't support passing each cart item details,
  // this is a workaround to get product details to track payments and sessions
  // the following is what we get from the cart, it's a string simulating an array as order is important
  // the order is `[id, name, qty, calendly ownder event type url (aka owner)]`
  const itemDetails = Object.entries(rest).map((item) => {
    return {
      id: item[1].split(',')[0].trim(),
      name: item[1].split(',')[1].trim(),
      price: item[1].split(',')[2].trim(),
      quantity: item[1].split(',')[3].trim(),
      owner: item[1].split(',')[4].trim(),
      owner_type: 'EventType',
    }
  })

  const getLink = (owner) =>
    axios.request({
      method: 'POST',
      url: 'https://api.calendly.com/scheduling_links',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.CALENDLY_API_KEY,
      },
      data: {
        max_event_count: 1,
        owner,
        owner_type: 'EventType',
      },
    })

  const getLinks = async (arr) => {
    const urls = arr.flatMap((lineItem) => {
      // In the inner map we could return an array, the flatMap flattens the inner array so they can be awaited later
      const quantity = parseInt(lineItem.quantity, 10) // Parse the quantity of type string to a number
      const sessionId = Number(lineItem.id)
      const owner = lineItem.owner
      const price = lineItem.price
      const name = lineItem.name
      const status = event.data.object.payment_status
      return Array(quantity)
        .fill(null) // Build an array with the length of quantity, filling it with null. The .map will replace null with an array of urls
        .map(async () => {
          // create and return your promise here
          // 3.  item details into supabse database
          const { data: paymentData, error: paymentDataError } = await supabase
            .from('payment')
            .insert([
              {
                user_id: userId, // supabase prefers all column names to be lowercased
                therapy_session_id: sessionId,
                status,
                amount: price,
                checkout_session_id: checkoutSessionId,
              },
            ])
          console.log('paymentData:>>>>>>>', paymentData)
          if (paymentDataError) {
            console.log(
              `There was an error adding payment record: ${paymentDataError.message}`
            )
          }
          const paymentId = paymentData[0].id
          console.log('paymentId:', paymentId)
          console.log('userId:', userId)
          console.log('sessionId:', sessionId)

          const { data: bookingData, bookingDataError } = await supabase
            .from('booking')
            .insert([
              {
                user_id: userId, // supabase prefers all column names to be lowercased
                therapy_session_id: sessionId,
                payment_id: paymentId,
              },
            ])
          if (bookingDataError) {
            console.log(
              `There was an error adding payment record: ${bookingDataError.message}`
            )
          }
          console.log('bookingData:>>>>>>>', bookingData)
          const bookingId = bookingData[0].id
          console.log('bookingId:', bookingId)

          // 4. call the api to get a single use booking url for each item and use utm tracking
          // utm_source is bookingId
          // including this with the single use url to update the booking details from webhook
          const calendlyPromise = getLink(owner)
          let url = (await calendlyPromise).data.resource.booking_url
          const urlWithUtm = `${url}?utm_source=${bookingId}&email=${email}`
          console.log('urlWithUtm:', urlWithUtm)

          const {
            data: calendly_booking_url,
            error: calendly_booking_url_error,
          } = await supabase
            .from('booking')
            .update({ calendly_booking_url: urlWithUtm })
            .eq('id', bookingId)
          if (calendly_booking_url_error) {
            console.log(
              `There an error booking a calendly URL: ${calendly_booking_url_error}`
            )
          }
        })
    })
  }

  const { data: email, error: emailError } = await supabase
    .from('profile')
    .select('email')
    .eq('id', userId)
  if (emailError) {
    console.log(
      `there was an error fetching the user's email from supabase: ${emailError}`
    )
  }

  const message = `
    Hello,\r\n
    Thank you for your recent purchase from the therapy place:\r\n
    Please navigate to <a href='https://thetherapyplaceuk.com'>your profile</a> to see payments/session history and to book your sessions\r\n
    On behalf of the team of The Therapy Place, we would like to thank you for your booking and we look forward to working closely with you! ❤️
  `

  const mailData = {
    To: email[0].email,
    From: 'nisha@thetherapyplaceuk.com',
    Subject: `Thank you for choosing The Therapy Place`,
    TextBody: message,
    HtmlBody: `
      Hi 👋🏼,<br>
      Thank you for your recent purchase from the therapy place:<br>
      Please navigate to <a href='https://thetherapyplaceuk.com/users/${userId}'>your profile</a> to see payments/session history and to book your sessions<br>
      On behalf of the team of The Therapy Place, we would like to thank you for your booking and we look forward to working closely with you! ❤️
    `,
    MessageStream: 'outbound',
  }

  getLinks(itemDetails)
  await postmarkClient.sendEmail(mailData)
  res.send({ received: true })
}
export default handler
