import { postmarkClient } from '../../utils/postmark'

const handler = async (req, res) => {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res
      .status(401)
      .send("You're not authorized to call this API endpoint")
  }
  console.log('req.body :>> ', req.body.record.user_email)
  const message = `
      Hello,\r\n
      A homework has been assigned by your speech therapist. Please check your profile for more details.
    `

  const mailData = {
    To: email[0].email,
    From: 'nisha@thetherapyplaceuk.com',
    Subject: `The Therapy Place - New Homework Asssigned`,
    TextBody: message,
    HtmlBody: `
        Hi 👋🏼,<br>
        A homework has been assigned by your speech therapist. Please check your profile for more details.
      `,
    MessageStream: 'outbound',
  }

  await postmarkClient.sendEmail(mailData)
  res.send({ received: true })
}

export default handler
