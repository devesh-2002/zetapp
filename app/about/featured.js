import React from 'react'
import { Heading, Text, Card, Box } from '@chakra-ui/react';

function Featured() {
  return (
    <div>
      <Heading>Got Featured</Heading>
      <div style={{ display: 'flex' }}>
        <Box maxW={'15%'} mx={10}>
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=1080&q=75" alt="" />
        </Box>
        <Box maxW={'15%'}mx={10}>
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=1080&q=75" alt="" />
        </Box>
        <Box maxW={'15%'}mx={10}>
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=1080&q=75" alt="" />
        </Box>
        <Box maxW={'15%'}mx={10}>
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=1080&q=75" alt="" />
        </Box>
        <Box maxW={'15%'}mx={10}>
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=1080&q=75" alt="" />
        </Box>
      </div>
    </div>
  )
}

export default Featured
