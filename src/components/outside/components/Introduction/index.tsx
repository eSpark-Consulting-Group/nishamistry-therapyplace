import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import BLUE_STAR from '../../../../../public/svg/BLUE STAR.svg'
import GREEN_STAR from '../../../../../public/svg/GREEN STAR.svg'
import ORANGE_STAR from '../../../../../public/svg/ORANGE STAR.svg'
import CHECK_MARK from '../../../../../public/svg/WEB-TICK.svg'
import TWO_BOXES from '../../../../../public/svg/Two_Boxes.svg'
import NISHA_NOTEPAD from '../../../../../public/img/WEB-NISHA NOTEPAD@4x.png'
import SITTING from '../../../../../public/img/WEB-SITTING@4x.png'
import HOORAY from '../../../../../public/img/WEB-HOORAY@4x.png'
// import IntroductionHeader from './components/outside/components/introduction/introductionHeader.tsx'
import IntroductionHeader from './IntroductionHeader'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

const Introduction: React.FC = () => {
  return (
    <div className="flex w-[100%] flex-col items-center justify-center bg-white sm:mt-8 md:mt-10 lg:mt-[100px]">
      <IntroductionHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

export default Introduction
