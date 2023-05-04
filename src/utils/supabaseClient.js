import { createClient } from '@supabase/supabase-js'
import { format } from 'date-fns'
import startOfToday from 'date-fns/startOfToday'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
)

export const getServiceSupabase = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  )

export const getSessions = async () =>
  await await supabase
    .from('therapy_session')
    .select('*')
    .order('order', { ascending: true })

const today = format(new Date(startOfToday()), 'P')

// upcoming - ordered by booking start time, most recent on top.
export const getProfile = async (profileId) =>
  await await supabase.from('profile').select('*').eq('id', profileId)

// pending sessions paid & not yet booked
// ordered by booking start time, most recent on top.
export const getPending = async (profileId) =>
  await await supabase
    .from('booking')
    .select(
      `
        id,
        status,
        created_at,
        calendly_booking_url,
        therapy_session(
          name,
          duration
        ),
        payment(
          receipt_url
        )
      `
    )
    .eq('user_id', profileId)
    .is('status', null)
    .neq('calendly_booking_url', null)

export const getPaymentReceipts = async (profileId) =>
  await await supabase
    .from('payment')
    .select(`receipt_url, created_at, id`)
    .eq('user_id', profileId)
    .order('created_at', { ascending: true })

export const getGoal = async (userId) =>
  await await supabase.from('goal').select('*').eq('user_id', userId)

export const getHomeworkList = async (userEmail) =>
  await await supabase.from('homework').select('*').eq('user_email', userEmail)

export const getHomework = async (homeworkId) =>
  await await supabase.from('homework').select('*').eq('id', homeworkId)

export const getReports = async (userEmail) =>
  await await supabase.from('report').select('*').eq('user_email', userEmail)

export const getFiles = async (user) =>
  await supabase.storage.from('user-reports').list(user)

export const getSignedUrl = async (user, fileName) =>
  await supabase.storage
    .from('user-reports')
    .createSignedUrl(`${user}/${fileName}`, 60)
