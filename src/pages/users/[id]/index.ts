import { useUser } from '../../../context/user'
import { getProfile } from '../../../utils/supabaseClient'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useRouter } from 'next/router'
import FadeLoader from 'react-spinners/FadeLoader'
import ProfileDetails from '../../../components/profilePage/ProfileDetails'
import ProfileLayout from '../../../components/shared/layout/ProfileLayout'

const Profile = () => {
  const { user } = useUser()
  const router = useRouter()
  const profileId = typeof router.query?.id === 'string' ? router.query.id : ''

  const {
    isSuccess,
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery(['profile', profileId], () => getProfile(profileId), {
    enabled: profileId.length > 0,
  })

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
  if (isError) return <div>Error: {error.message}</div>
  if (!profile) return <div>No profile data found</div>

  return (
    <div className="flex-1">
      <ProfileDetails profile={profile} profileId={profileId} />
    </div>
  )
}

Profile.PageLayout = ProfileLayout

export default Profile

export const getStaticProps = async (context) => {
  const id = context.params?.id
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['getProfile', id], () => getProfile(id))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
