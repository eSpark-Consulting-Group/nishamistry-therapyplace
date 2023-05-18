import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FAQs from './components/FAQs'
import Reviews from './components/Reviews'
// import Footer from "./components/layout/Footer";
import VideoSection from './components/VideoSection'
import PriceSection from './components/PriceSection'
import Introduction from './components/Introduction'
import BANNER_IMAGE from '../../../public/img/TABLET-HEADER@4x.png'
import HeroSection from './components/HeroSection'
import ToddlerTalkSection from './components/ToddlerTalkSection'
import ButtonTwo from './components/FAQs/FaqSection'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white md:mb-[40px] lg:mb-[18px] sm:mb-[18px]">
      <HeroSection />
      <VideoSection />
      <ToddlerTalkSection />
      <Introduction />
      <PriceSection />
      <FAQs /> 
      <ButtonTwo />
    </div>
  )
}
