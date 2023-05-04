import ProfileLayout from '../../../components/shared/layout/ProfileLayout'
import { getReports } from '../../../utils/supabaseClient'
import { useUser } from '../../../context/user'
import { useQuery } from 'react-query'
import { format } from 'date-fns'

const Reports = () => {
  const { user } = useUser()
  const userEmail = user.email

  const {
    data: reports,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery('homeworkList', () => getReports(userEmail))

  if (isError) {
    console.log('serverError :>> ', serverError)
  }
  if (isLoading) return <div>Loading...</div>
  if (isFetching) return <div>Loading...</div>

  return (
    <section className="ml-12 md:ml-0">
      <h3 className="mb-3 text-4xl font-LGCB">Reports</h3>
      <div>
        {reports && reports.data && (
          <div className="overflow-x-auto">
            <table className="w-[70%] table-auto">
              <thead className="text-sm uppercase bg-snow font-LGCB text-navy">
                <tr>
                  <th className="p-2">
                    <div className="text-left font-LGCB">Title</div>
                  </th>
                  <th className="p-2">
                    <div className="text-left font-LGCB">Date</div>
                  </th>
                  <th className="p-2">
                    <div className="text-center font-LGCB">Download</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mint text-navy">
                {reports.data.map((r) => {
                  return (
                    <tr key={r.id}>
                      <td className="p-2">
                        <div>{r.title}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-sm text-left">
                          {format(new Date(r.created_at), 'PP')}
                        </div>
                      </td>
                      <td className="p-2">
                        <a target="_blank" href={r.url}>
                          <div className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                              />
                            </svg>
                          </div>
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

Reports.PageLayout = ProfileLayout

export default Reports
