const PendingAppointments = ({ pendingAppointment }) => {
  console.log('pendingAppointment:', pendingAppointment)
  return (
    <section className="w-full text-navy xl:w-3/4">
      <h2 className="mt-12 text-3xl font-LGCB lg:mt-0">Pending Appointments</h2>
      <div className="flex-col w-full mt-3">
        <div className="mb-3 text-lg font-LGCB">
          Paid appointments that have not yet been booked. Please book now!
        </div>
        {pendingAppointment && pendingAppointment.length > 0 ? (
          <div className="grid gap-3 p-1">
            {pendingAppointment.map((a) => (
              <div
                className="flex flex-col justify-between bg-snow last:mb-0 lg:w-[76.5%] lg:flex-row lg:items-center"
                key={a.id}
              >
                <div className="flex-1 tracking-wider font-LGCB">
                  {a.therapy_session.name}
                </div>
                <div className="flex items-center gap-1">
                  <a
                    className="focus:ring-navy/400 mr-2 mb-2 w-28 rounded-lg bg-navy/90 px-5 py-2.5 text-center text-sm font-medium text-snow hover:bg-navy/100 focus:outline-none focus:ring-4 lg:w-auto"
                    href={a.calendly_booking_url}
                  >
                    Book now
                  </a>
                  {a.payment.receipt_url && (
                    <a
                      className="focus:ring-navy/400 mr-2 mb-2 w-28 rounded-lg bg-navy/90 px-5 py-2.5 text-center text-sm font-medium text-snow hover:bg-navy/100 focus:outline-none focus:ring-4 lg:w-auto"
                      href={a.payment.receipt_url}
                    >
                      Receipt
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="ml-5">No pending appoinments found</div>
        )}
      </div>
    </section>
  )
}

export default PendingAppointments
