"use client"
import React from 'react'
import { Heading,Center,Box } from '@chakra-ui/react'
import Investors from './investors'
import Founders from './founders'
import Featured from './featured'
function About() {
  return (
    <>
    <Box position="relative">
      <img
        src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100"
        alt=""
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
      >
        <Heading fontSize={{ base: 'xs', md: '3xl' }} mb={4}>
          OUR MISSION
        </Heading>
        <Box fontSize={{ base: 'xs', md: 'xl' }}>
          Enabling financial inclusion for the next billion Indians & making their Zindagi Set.
          Building a platform that enables you to sell financial products & earn up to Rs. 1 lakh every month.
        </Box>
        <Box fontSize={{ base: 'xs', md: '2xl' }} fontWeight="bold" mt={4}>
          EARN BETTER. LIVE BETTER.
        </Box>
      </Box>
    </Box>
   
      <Heading my={10}><Center>How we evolved over the years</Center></Heading>
      <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=3840&q=100" alt="" />
      <Featured />
      <Investors/>
      <Founders />
      <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUsFooter.d2311d39.png&w=3840&q=100" alt="" />
    </>
  )
}

export default About