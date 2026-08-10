import { getServiceSupabase } from '../../utils/supabaseClient'
import { postmarkClient } from '../../utils/postmark'

export default async (req, res) => {
  const formData = JSON.parse(req.body)
  const supabase = getServiceSupabase()

  const human = await validateHuman(formData.token)

  if (!human) {
    res.status(400)
    res.json({ errors: ['Please be a human'] })
    console.error('Please be a human')
    return
  }

  const { data: submission, error } = await supabase.from('contact').insert({
    first_name: formData.first_name,
    last_name: formData.last_name,
    email: formData.email,
    comments: formData.comments,
    role: formData.role,
    source: formData.source,
  })

  if (error) {
    console.log(`Contact us error: ${error.message}`)
  }

  const message = `
    Hey Nisha,\r\n
    \r\n
    ${formData.first_name} ${
    formData.source
  } on your website. Here are their contact details:\r\n
    First Name: ${formData.first_name}\r\n
    Last Name: ${formData.last_name}\r\n
    Email: ${formData.email}\r\n
    Role: ${formData.role || ''}\r\n
    Comments: ${formData.comments || ''}\r\n
    \r\n
    A copy of their details is saved to the database for future reference.\r\n
    Thanks!
  `

  const mailData = {
    To: 'nisha@thetherapyplaceuk.com',
    From: 'TTP Site Admin<nisha@thetherapyplaceuk.com>',
    Subject: `New Contact Us Form Message`,
    TextBody: message,
    HtmlBody: `
      Hey Nisha,<br>

      ${formData.first_name} ${
      formData.source
    } on your website. Here are their contact details:<br>
      <p>First Name: ${formData.first_name}<br>
      Last Name: ${formData.last_name}<br>
      Email: ${formData.email}<br>
      Role: ${formData.role || ''}<br>
      Comments: ${formData.comments || ''}<br></p>

      <p>A copy of their details is saved to the database for future reference.</p>
      Thanks!
    `,
    MessageStream: 'outbound',
  }
  await postmarkClient.sendEmail(mailData)

  res.status(200).json({ status: 'Ok' })
}

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
