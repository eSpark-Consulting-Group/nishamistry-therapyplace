import { getPending } from '../../../utils/supabaseClient'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import ProfileLayout from '../../../components/shared/layout/ProfileLayout'
import PendingAppointments from '../../../components/appointmentsPage/PendingAppointments'
import ActiveAppointments from '../../../components/appointmentsPage/ActiveAppointments'
import FadeLoader from 'react-spinners/FadeLoader'
import PaymentHistory from '../../../components/appointmentsPage/PaymentHistory'

function Appointments() {
  const router = useRouter()
  const profileId = typeof router.query?.id === 'string' ? router.query.id : ''
  const {
    isLoading,
    isError,
    data: pending,
    error,
  } = useQuery(['pending', profileId], () => getPending(profileId))

  if (isLoading)
    return (
      <FadeLoader
        color="#23254E"
        height={13}
        cssOverride={{
          margin: '0 auto',
        }}
        width={5}
      />
    )

  return (
    <div className="flex flex-col ml-12 gap-y-10">
      {pending && pending.data && pending.data.length > 0 ? (
        <PendingAppointments pendingAppointment={pending.data} />
      ) : null}
      <ActiveAppointments />
      <PaymentHistory />
    </div>
  )
}

Appointments.PageLayout = ProfileLayout

export default Appointments
