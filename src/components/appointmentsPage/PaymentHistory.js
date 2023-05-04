import { useQuery } from 'react-query'
import { format, isToday, isPast, isFuture } from 'date-fns'
import { getPaymentReceipts } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'

function PaymentHistory() {
  const router = useRouter()
  const profileId = typeof router.query?.id === 'string' ? router.query.id : ''
  const {
    isLoading,
    isError,
    data: receipts,
    error,
  } = useQuery(['receipts', profileId], () => getPaymentReceipts(profileId))

  if (isLoading) <div>Loading ...</div>
  console.log('receipts :>> ', receipts)

  return (
    <section className="w-[70%]">
      <h2 className="mb-3 text-3xl font-LGCB">Payment History</h2>
      <div className="mb-3 text-sm">Download Receipts</div>
      {receipts && receipts.data && receipts.data.length > 0 ? (
        <div className="w-full text-navy xl:w-3/4">
          <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
            {receipts.data.map((r) => (
              <li key={r.id} className="">
                <a
                  href={r.receipt_url}
                  className="block w-32 px-5 py-3 mr-2 text-xs text-center rounded-lg bg-navy/90 text-snow hover:bg-navy/100 focus:outline-none focus:ring-4 focus:ring-navy/40"
                >
                  {format(new Date(r.created_at), 'PP')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}

export default PaymentHistory
