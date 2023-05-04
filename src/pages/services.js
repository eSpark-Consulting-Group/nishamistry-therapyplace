import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import FadeLoader from 'react-spinners/FadeLoader'
import Link from 'next/link'
import { imageBuilder, sanityClient } from '../utils/sanityClient'
import Training from '../components/servicesPage/Training'
import ServicesGrid from '../components/servicesPage/ServicesGrid'
import Hero from '../components/servicesPage/Hero'
import LeadMagnet from '../components/servicesPage/LeadMagnet'
import CallToAction from '../components/servicesPage/CallToAction'
import Head from 'next/head'

// sanity image url builder
const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

const getServicesPageData = async () =>
  await sanityClient.fetch(groq`
  *[_type in ['servicePage', 'service', 'resource']]
  `)

const Services = () => {
  const {
    data: servicesPageData,
    isLoading: isSanityLoading,
    isError,
    error,
  } = useQuery('servicesPageData', getServicesPageData)

  if (!servicesPageData) return <div>No data</div>
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

  // getting the different data types out
  let servicePage = servicesPageData.filter((i) => i._type === 'servicePage')
  servicePage = Object.assign({}, ...servicePage)
  const services = servicesPageData.filter((i) => i._type === 'service')
  const resources = servicesPageData.filter((i) => i._type === 'resource')
  const { hero, training, printableResources } = servicePage

  return (
    <div className="relative z-0 mb-7 font-LGC text-navy">
      <Head>
        <title>The Therapy Place Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero hero={hero} />
      <ServicesGrid services={services} />
      <Training training={training} />
      <LeadMagnet media={printableResources} resources={resources} />
      <CallToAction />
    </div>
  )
}

export default Services

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('servicesPageData', getServicesPageData)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
