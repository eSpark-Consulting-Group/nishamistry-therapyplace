import { useQuery } from 'react-query'
import { useUser } from '../../context/user'
import { isPast, isFuture } from 'date-fns'
import UpcomingAppointments from './UpcomingAppointments'
import AppointmentHistory from './AppointmentHistory'

function ActiveSessions() {
  const { user } = useUser()
  const { email: userEmail } = user
  const { isLoading, isError, data, error } = useQuery(
    ['sessions', userEmail],
    async () => {
      // an api route to fetch all calendly sessions from calendly API on the backend
      const response = await fetch('/api/calendly-appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      })
      const data = await response.json()
      return data
    }
  )
  const past = data?.allSessions?.collection.filter((s) =>
    isPast(new Date(s.start_time))
  )
  const future = data?.allSessions?.collection.filter((s) =>
    isFuture(new Date(s.start_time))
  )
  console.log('past:', past)
  console.log('future:', future)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="flex w-[80%] flex-col gap-y-10">
      <UpcomingAppointments future={future} />
      <AppointmentHistory past={past} />
    </div>
  )
}

export default ActiveSessions
