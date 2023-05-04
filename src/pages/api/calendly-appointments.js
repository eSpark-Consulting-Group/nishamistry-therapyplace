import axios from 'axios'
import { format, startOfToday } from 'date-fns'

export default async function handler(req, res) {
  const { email } = req.body
  console.log('email:', email)

  try {
    const options = {
      method: 'GET',
      url: 'https://api.calendly.com/scheduled_events',
      params: {
        user: process.env.NEXT_PUBLIC_CALENDLY_USER,
        organization: process.env.NEXT_PUBLIC_CALENDLY_ORGANIZATION,
        invitee_email: email,
        status: 'active',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.CALENDLY_API_KEY,
      },
    }

    const response = await axios.request(options)
    const allSessions = response.data

    res.status(200).json({ allSessions })
  } catch (error) {
    console.error('here>>>', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
