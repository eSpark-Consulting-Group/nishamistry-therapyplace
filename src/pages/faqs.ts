import sanityClient from '../utils/sanityClient'
import groq from 'groq'
import CTAComponent from '../components/shared/CallToAction'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import FaqsDisclosure from '../components/faqsPage/FaqsDisclosure'
import Head from 'next/head'

const getFaqsPageData = async () =>
  await sanityClient.fetch(groq`
  *[_type in ['faqsPage']]
  `)

const Faqs = () => {
  const {
    data: faqsPageData,
    isLoading: isSanityLoading,
    isError,
    error,
  } = useQuery('faqsPageData', getFaqsPageData)

  if (!faqsPageData) return <div>No data</div>
  if (isSanityLoading)
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
    <div className="font-LGC text-navy">
      <Head>
        <title>The Therapy Place FAQs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FaqsDisclosure faqsPageData={faqsPageData} />
      <CTAComponent />
    </div>
  )
}

export default Faqs

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('faqsPageData', getFaqsPageData)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
