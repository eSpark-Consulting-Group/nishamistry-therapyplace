import sanityClient from '../utils/sanityClient'
import groq from 'groq'
import Link from 'next/link'
import Hero from '../components/homePage/Hero'
import TabletHero from '../components/homePage/TabletHero'
import MobileHero from '../components/homePage/MobileHero'
import Welcome from '../components/homePage/Welcome'
import HomeServices from '../components/homePage/HomeServices'
import TabletHomeServices from '../components/homePage/TabletHomeServices'
import MobileHomeServices from '../components/homePage/MobileHomeServices'
import AboutMe from '../components/homePage/HomeAbout'
import Reviews from '../components/homePage/Reviews'
import HomeLearnMore from '../components/homePage/HomeLearnMore'
import { useUser } from '../context/user'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import FadeLoader from 'react-spinners/FadeLoader'
import Head from 'next/head'

const getHomePageData = async () =>
  await sanityClient.fetch(groq`
  *[_type in ["homePage", "siteSettings"]]
  `)

const Index = () => {
  const {
    data: homePageData,
    isLoading: isSanityLoading,
    isError,
    error,
  } = useQuery('homePageData', getHomePageData)
  console.log('homePageData:', homePageData)

  if (!homePageData) return <div>No data</div>
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
  const { user } = useUser()

  const { hero, welcome, reviews, homeAboutMe, homeServices } = homePageData[1]
  return (
    <div className="flex flex-col font-LGC">
      <Head>
        <title>The Therapy Place</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero hero={hero} />
      <TabletHero hero={hero} />
      <MobileHero hero={hero} />
      <Welcome welcome={welcome} />
      <HomeServices services={homeServices} />
      <TabletHomeServices services={homeServices} />
      <MobileHomeServices services={homeServices} />
      <AboutMe about={homeAboutMe} />
      <HomeLearnMore />
      <Reviews reviews={reviews} />
      <section className="items-center justify-around hidden w-full p-4 mb-7 bg-army xl:flex">
        <Link href="/services">
          <a className="bg-navy px-[3rem] py-1 text-sm uppercase text-snow sm:px-[4rem] sm:text-base">
            Services
          </a>
        </Link>
        <img className="w-[280px]" src="ttp-main-logo.svg" alt="" />
        <Link href="/resources">
          <a className="bg-navy px-[3rem] py-1 text-sm uppercase text-snow sm:px-[4rem] sm:text-base">
            Resources
          </a>
        </Link>
      </section>
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('homePageData', getHomePageData)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
