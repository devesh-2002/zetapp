import React,{useState,useEffect} from 'react'
import {Heading,Box,Text,useBreakpointValue} from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import './index.css'
function Founders() {
  const [isScrolled, setIsScrolled] = useState(false);
  const variant = useBreakpointValue({ base: 'xs', lg: 'md' })



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className={`cards-container ${isScrolled ? 'move' : ''}`} variant={variant}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
>
  <Text fontSize={"2xl"} fontWeight="bold" mt={'10%'}>Meet Our Founders</Text>
  <Text fontSize={"xl"}>Few words from the founder's desk</Text>
</div>

<div style={{ display: 'flex', flexDirection: 'row', transform: 'translateY(-10px)' }}>
  <Box mx={"20"} maxW={'25%'} py={10} _hover={{
    transform: 'translateY(-10px) translateX(-10px) translateZ(0)',
    transition: 'transform 0.3s ease-in-out'
  }}>

    <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=1080&q=75"
      href="" align={"left"} alt="" />
    <Text fontSize={"2xl"}>Manish Sharma</Text>
    <Text fontSize={"xl"}>Co-Founder and CEO</Text>
    <FaLinkedin size={"10%"} />
  </Box>
  <Box mx={"20"} maxW={'25%'} py={10} _hover={{
    transform: 'translateY(-10px) translateX(-10px) translateZ(0)',
    transition: 'transform 1s ease-in-out'
  }}>
    <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=1080&q=75"
      alt="" align={"left"} />
    <Text fontSize={"2xl"}>Yash Desai</Text>
    <Text fontSize={"xl"}>Co-Founder</Text>
    <FaLinkedin size={"10%"} />
  </Box>
  <Box mx={"20"} maxW={'25%'} py={10} _hover={{
    transform: 'translateY(-10px) translateX(-10px) translateZ(0)',
    transition: 'transform 0.5s ease-in-out'
  }}>
    <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=1080&q=75"
      alt="" />
    <Text fontSize={"2xl"}>Lokesh Aggarwal</Text>
    <Text fontSize={"xl"}>CTO</Text>
    <FaLinkedin size={"10%"} />
  </Box>
</div>

    </div>
  )
}

export default Founders