import { postmarkClient } from '../../utils/postmark'
import { getServiceSupabase } from '../../utils/supabaseClient'
import { sanityClient } from '../../utils/sanityClient'
import groq from 'groq'

export default async (req, res) => {
  const formData = JSON.parse(req.body)
  console.log('formData:', formData)
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
    role: formData.role,
    source: formData.source,
  })

  const getMediaData = async () => {
    const mediaData = await sanityClient.fetch(groq`
      *[_type == "resource"]{
        title,
        "url": file.asset->url
      }
    `)
    const textLinksStr = mediaData
      .map((r, i) => {
        return `${i + 1}. ${r.title}: ${r.url}\r\n`
      })
      .toString()

    const htmlLinksStr = mediaData
      .map((r, i) => {
        return `${i + 1}. <a href=${r.url}>${r.title}</a><br>`
      })
      .join('')
      .toString()

    const clientMessage = `
      Dear ${formData.first_name},\r\n
      \r\n
      Here are the resources you requested:\r\n
      ${textLinksStr}\r\n
      \r\n
      We hope you find them helpful.\r\n
      Thanks!
    `

    const clientMailData = {
      To: formData.email,
      From: 'The Therapy Place<nisha@thetherapyplaceuk.com>',
      Subject: `The Therapy Place Resources`,
      TextBody: clientMessage,
      HtmlBody: `
      Dear ${formData.first_name},<br>
        Here are the resources you requested:<br>
        ${htmlLinksStr}
        <p>We hope you find them helpful.
        Thanks!</p>
        `,
      MessageStream: 'outbound',
    }
    await postmarkClient.sendEmail(clientMailData)
  }
  getMediaData()

  if (error) {
    console.log(`Error saving the client downloading media: ${error.message}`)
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
