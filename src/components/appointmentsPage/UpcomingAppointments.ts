import { format } from 'date-fns'

const UpcomingAppointments = ({ future }) => {
  return (
    <div>
      <h2 className="mb-5 text-3xl font-bold">Upcoming Appointments</h2>
      <ul className="">
        {future && future.length ? (
          future.map((session) => (
            <li key={session.uri} className="self-start w-full">
              <div className="mb-3 w-full font-LGCB text-lg sm:w-[70%] xl:mb-0 xl:w-[60%]">
                {session.name}
              </div>
              <div className="flex items-center gap-x-3">
                <div className="text-xs">
                  Starting: {format(new Date(session?.start_time), 'PP')}{' '}
                  {format(new Date(session?.start_time), 'p')}
                </div>
                {session?.location?.join_url ? (
                  <a className="text-4xl" href={session?.location?.join_url}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="48px"
                      height="48px"
                    >
                      <circle cx="24" cy="24" r="20" fill="#2196f3" />
                      <path
                        fill="#fff"
                        d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
                      />
                      <polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </li>
          ))
        ) : (
          <div>No upcoming appoinments found</div>
        )}
      </ul>
    </div>
  )
}

export default UpcomingAppointments
