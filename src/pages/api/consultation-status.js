import { getServiceSupabase } from "../../utils/supabaseClient";
export default async (req, res) => {
  const supabase = getServiceSupabase()
  const result = JSON.parse(req.body)
  const {event, userId} = result

  if (!result) {
    res.status(400)
    res.json({ error: 'Failed to record consultation status' })
    console.error('Failed to record consultation status')
    return
  }

  if(event === 'calendly.event_scheduled') {
    await supabase
      .from('profile')
      .update({
        is_consulted: true,
      })
      .eq('id', userId)
  }

  res.status(200).json({ status: 'Ok' })
}
