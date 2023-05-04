import { getServiceSupabase } from '../../utils/supabaseClient'

export default async (req, res) => {
  const formData = JSON.parse(req.body)
  const supabase = getServiceSupabase()

  const { publicURL, error: publicURLError } = supabase.storage
    .from('profile-avatars')
    .getPublicUrl(`${formData.profileId}`)

  if (publicURLError) {
    console.log('publicURLError :>> ', publicURLError.message)
  }

  const { data: profile, error } = await supabase
    .from('profile')
    .update({
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
      date_of_birth: formData.date_of_birth,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      guardian_name: formData.guardian_name,
      guardian_email: formData.guardian_email,
      guardian_phone: formData.guardian_phone,
      lead_source: formData.lead_source,
      avatar_url: publicURL,
    })
    .eq('id', formData.profileId)

  if (error) {
    res.status(400)
    res.json({ error: error.message })
    return
  }

  res.status(200).json({ status: 'Ok' })
}
