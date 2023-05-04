import { format, isToday, isPast, isFuture } from 'date-fns'

export default function AppointmentHistory({ past }) {
  return (
    <div>
      <h2 className="mb-5 text-3xl font-bold">Appointment History</h2>
      <ul className="">
        {past && past.length ? (
          past.map((session) => {
            return (
              <li key={session.uri} className="self-start w-full">
                <div className="mb-3 w-full font-LGCB text-lg sm:w-[70%] xl:w-[60%]">
                  {session.name}
                </div>
                <div className="text-xs">
                  {format(new Date(session?.start_time), 'PP')}{' '}
                  {format(new Date(session?.start_time), 'p')}
                </div>
              </li>
            )
          })
        ) : (
          <div>No past appoinments found</div>
        )}
      </ul>
    </div>
  )
}
