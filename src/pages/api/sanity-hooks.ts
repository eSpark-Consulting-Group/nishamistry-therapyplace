// pages/api/hook.js
import { isValidRequest } from '@sanity/webhook'
import { getServiceSupabase } from '../../utils/supabaseClient'

const secret = process.env.SANITY_SIGNING_SECRET

const handler = async (req, res) => {
  if (!isValidRequest(req, secret)) {
    res.status(401).json({ success: false, message: 'Invalid signature' })
    return
  }
  const event = res.req.body
  console.log('event:', event)
  const supabase = getServiceSupabase()

  switch (event.type) {
    case 'create':
      const { data: goalInserteData, error: goalInsertError } = await supabase
        .from('goal')
        .insert([
          {
            sanity_id: event._id,
            user_email: event.userEmail,
            user_id: event.userId,
            set_date: event.setDate,
            review_date: event.reviewDate,
            overview: event.overview,
            goal: event.goal,
            current_presentation: event.currentPresentation,
            outcome: event.outcome,
          },
        ])
      if (goalInsertError) {
        console.log('goalInsertError :>> ', goalInsertError)
      }
      break
    case 'update':
      const { data: goalUpdateData, error: goalUpdatError } = await supabase
        .from('goal')
        .update({
          sanity_id: event._id,
          user_email: event.userEmail,
          user_id: event.userId,
          set_date: event.setDate,
          review_date: event.reviewDate,
          overview: event.overview,
          goal: event.goal,
          current_presentation: event.currentPresentation,
          outcome: event.outcome,
        })
        .eq('sanity_id', event._id)
      break
    default:
      console.log({
        data,
        error,
      })
  }

  res.json({ success: true })
}

export default handler
