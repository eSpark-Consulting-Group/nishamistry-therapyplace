import { getServiceSupabase } from "../../utils/supabaseClient"

export default async (req, res) => {
  const formData = JSON.parse(req.body)
  const supabase = getServiceSupabase()

  const { user, error } = await supabase.auth.update({
    password: formData.password
  })

  if (error) {
    console.log(`error updating password: ${error.message}`)
    res.status(400)
    res.json({ error: error.message })
    return
  }

  res.status(200).json({ status: 'Ok' })
}