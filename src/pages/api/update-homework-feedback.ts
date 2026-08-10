import { getServiceSupabase } from '../../utils/supabaseClient'
import { postmarkClient } from '../../utils/postmark'

export default async (req, res) => {
  const formData = JSON.parse(req.body)
  const supabase = getServiceSupabase()

  const { data, error } = await supabase
    .from('homework')
    .update({
      user_feedback: formData.feedback,
    })
    .eq('id', formData.homewokId)

  if (error) {
    console.log(`error updating homework feedback: ${error.message}`)
    res.status(400)
    res.json({ error: error.message })
    return
  }

  const message = `
      Hey Nisha,\r\n
      \r\n
      ${formData.userEmail} submitted homework feedback on your website. Check the databse for homework ID ${formData.homewokId}
    `

  const mailData = {
    To: 'nisha@thetherapyplaceuk.com',
    From: 'TTP Site Admin<nisha@thetherapyplaceuk.com>',
    Subject: `New Homework feedback submitted`,
    TextBody: message,
    HtmlBody: `
        Hey Nisha,<br>
  
        ${formData.userEmail} submitted homework feedback on your website. Check the databse for homework ID ${formData.homewokId}
      `,
    MessageStream: 'outbound',
  }
  await postmarkClient.sendEmail(mailData)

  res.status(200).json({ status: 'Ok' })
}
