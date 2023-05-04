import { getSessions } from '../utils/supabaseClient'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import FadeLoader from 'react-spinners/FadeLoader'
import PriceListGrid from '../components/priceListPage/PriceListGrid'
import CallToAction2 from '../components/shared/CallToAction2'
import Head from 'next/head'

const PriceList = () => {
  const {
    data: sessions,
    isLoading: isSupabaseLoading,
    isError,
    error,
  } = useQuery('sessions', getSessions)

  if (!sessions) return <div>No therapy sessions found</div>
  if (isSupabaseLoading)
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

  return (
    <>
      <Head>
        <title>The Therapy Place Price List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PriceListGrid sessions={sessions} />
      <CallToAction2 />
    </>
  )
}

export default PriceList

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('sessions', getSessions)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
