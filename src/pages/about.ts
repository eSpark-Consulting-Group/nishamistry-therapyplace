import groq from 'groq'
import CTAComponent from '../components/shared/CallToAction'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import AboutHero from '../components/aboutPage/AboutHero'
import AboutMe from '../components/aboutPage/AboutMe'
import Mission from '../components/aboutPage/Mission'
import { sanityClient } from '../utils/sanityClient'
import Head from 'next/head'

const getAboutPageData = async () =>
  await sanityClient.fetch(groq`
  *[_type == "aboutPage"]
`)

const About = () => {
  const {
    data: aboutPageData,
    isLoading: isSanityLoading,
    isError,
    error,
  } = useQuery('aboutPageData', getAboutPageData)

  if (!aboutPageData) return <div>No data</div>
  if (isSanityLoading)
    return (
      <FadeLoader
        color="#23254E"
        height={5}
        cssOverride={{
          margin: '0 auto',
        }}
        width={5}
      />
    )
  if (isError) return <div>Error: {error.message}</div>

  const { hero, me, mission } = aboutPageData[0]

  return (
    <div className="relative z-0 flex flex-col items-center justify-around font-LGC">
      <Head>
        <title>The Therapy Place - About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AboutHero hero={hero} />
      <AboutMe me={me} />
      <Mission mission={mission} />
      <CTAComponent />
    </div>
  )
}

export default About

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('aboutPageData', getAboutPageData)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
