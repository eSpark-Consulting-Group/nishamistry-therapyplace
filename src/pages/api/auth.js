import { getServiceSupabase } from '../../utils/supabaseClient'
import { postmarkClient } from '../../utils/postmark'

const handler = async (req, res) => {
  const formData = JSON.parse(req.body)
  const supabase = getServiceSupabase()

  async function sendWelcomeEmail(email, name) {
    const { data: magiclink, error: magiclinkError } =
      await supabase.auth.api.generateLink('magiclink', email)

    if (magiclinkError) {
      console.log(
        `Error: there was an error generating magic link. check the user details and try again or contact admin`
      )
      return
    }

    const message = `
      Dear ${name},\r\n
      Thank you for registering with The Therapy Place!\r\n
      
      To complete the booking for your free parent consultation appointment, please follow the
      below link to login and click ‘Book Free Consultation’ at the top of the page. Follow the
      directions to select your appointment date and time.\r\n

      We look forward to meeting you soon! In the meantime, if you have any questions, please
      do not hesitate to send an email to nisha@thetherapyplaceuk.com.\r\n

      Login: ${magiclink.action_link}\r\n
      Kind regards,
    `

    const mailData = {
      To: email,
      From: 'The Therapy Place<nisha@thetherapyplaceuk.com>',
      Subject: `Welcome to The Therapy Place`,
      TextBody: message,
      HtmlBody: `
        Hi ${name},<br>
        Thank you for registering with The Therapy Place!
  
        <p>To complete the booking for your free parent consultation appointment, please follow the
        below link to login and click ‘Book Free Consultation’ at the top of the page. Follow the
        directions to select your appointment date and time.</p>

        <p>We look forward to meeting you soon! In the meantime, if you have any questions, please
        do not hesitate to send an email to nisha@thetherapyplaceuk.com.</p>
        
        <a href=${magiclink.action_link}>Login</a>
      `,
      MessageStream: 'outbound',
    }
    await postmarkClient.sendEmail(mailData)
  }

  const human = await validateHuman(formData.token)
  if (!human) {
    res.status(400)
    res.json({ errors: ['Please be a human'] })
    console.error('Please be a human')
    return
  }

  const cleanedUpPhone = formData.country_code + formData.phone
  const { user, error } = await supabase.auth.signUp(
    {
      email: formData.email,
      password: formData.password,
    },
    {
      data: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: cleanedUpPhone,
        date_of_birth: formData.date_of_birth,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        guardian_name: formData.guardian_name,
        guardian_email: formData.guardian_email,
        guardian_phone: formData.guardian_phone,
        lead_source: formData.lead_source,
      },
    }
  )

  if (error) {
    console.log(`error:, ${error.message}`)
    res.status(400)
    res.json({ error: error.message })
    return
  }

  if (user && user.role === 'authenticated') {
    await sendWelcomeEmail(formData.email, formData.first_name)
  }

  res.status(200).json({ status: 'Ok' })
}

export default handler

export const validateHuman = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  const response = await fetch(
    `https://google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: 'POST',
    }
  )
  const recapData = await response.json()
  return recapData.success
}
