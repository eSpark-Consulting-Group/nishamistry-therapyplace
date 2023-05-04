import { getServiceSupabase } from '../../utils/supabaseClient'

export default async (req, res) => {
  const fileData = JSON.parse(req.body)
  const fileName = fileData.name.split('.')[0]
  const supabase = getServiceSupabase()

  const { signedURL, error } = await supabase.storage
    .from('user-reports')
    .createSignedUrl(`${fileData.email}/${fileData.name}`, 60)

  res.status(200).json({ status: 'Ok', signedURL })
}
