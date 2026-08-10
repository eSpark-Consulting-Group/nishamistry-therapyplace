import React from 'react'
import ProfileLayout from '../../../../components/shared/layout/ProfileLayout'
import Link from 'next/link'
import { getHomework } from '../../../../utils/supabaseClient'
import { useUser } from '../../../../context/user'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { format } from 'date-fns'
import { useState } from 'react'
import HomeworkFeedbackForm from '../../../../components/homeworkPage/HomeworkFeedbackForm'

export const HomeworkPage = () => {
  const { user } = useUser()
  const router = useRouter()
  const homeworkId =
    typeof router.query?.homeworkId === 'string' ? router.query.homeworkId : ''
  const [loading, setLoading] = useState(false)

  const {
    data: homework,
    error: homeworkError,
    isLoading,
    isFetching,
  } = useQuery('homework', () => getHomework(+homeworkId))
  if (homeworkError) console.log('homeworkError :>> ', homeworkError)
  if (isLoading) return <div>Loading...</div>
  if (isFetching) return <div>Loading...</div>
  return (
    <div>
      {homework && homework.data ? (
        <div className="flex flex-col mt-12 gap-y-3 md:mt-0">
          <div className="text-xl capitalize font-LGCB">
            {homework?.data[0]?.question}
          </div>
          {homework?.data?.due_date ? (
            <div className="capitalize font-LGCB">
              Due date: {format(new Date(homework?.data[0]?.due_date), 'P')}
            </div>
          ) : null}
          <a
            className="flex items-center underline gap-x-1"
            href={homework?.data[0]?.url}
            target="_blank"
          >
            <span className="text-xl">Instructions note</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <HomeworkFeedbackForm homewokId={homeworkId} />
        </div>
      ) : null}
    </div>
  )
}

HomeworkPage.PageLayout = ProfileLayout

export default HomeworkPage
