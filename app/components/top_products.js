import React, { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  useColorModeValue,
  Text,
  Center,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat, image, color } = props;

  const grayscale = useColorModeValue('grayscale(100%)', 'grayscale(100%)');
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({ top: 10, behavior: 'smooth' });
      }, 100);
      
      return () => {
        window.scrollTo({ top: 0 });
      };
    }
  }, []);

  const cardFontSize = isMobile ? 'xs' : 'xl';

  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      bg={color}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      borderWidth={'0'}
      _hover={{
        bg: 'white',
        transform: 'scale(1.05) translateZ(0)',
        transition: 'opacity 1s, transform 2s',
        filter: 'grayscale(0%)',
      }}
      className="hover-card"
    >
      <img
        src={image}
        style={{ filter: grayscale, transition: 'filter 0.3s' }}
        width={'25%'}
        height={'25%'}
        alt={title}
        align={'left'}
      />
      <StatLabel fontWeight={'medium'} fontSize={cardFontSize} isTruncated>
        {title}
      </StatLabel>
      <Text fontWeight={'medium'} fontSize={cardFontSize} align={'right'}>
        {stat}
      </Text>
    </Stat>
  );
}

export default function TopProducts() {
  return (
    <>
      <Box maxW="12xl" mx={'auto'} px={{ base: 4, sm: 12, md: 17 }} alignItems={'center'}>
        <Heading textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
          Products on ZET
        </Heading>
        <Center>
          <Text mb={'5%'}>We are trusted by the best brands in the country</Text>
        </Center>
        <Center>
          <SimpleGrid columns={{ base: 4, md: 3 }} spacing={{ base: 5, lg: 8 }} mb={10}>
            <StatsCard
              image="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=1920&q=75"
              title={'CREDIT CARDS'}
              stat={'100% Contactless Application Process with Instant Approval From Top Banks.'}
              color={'green.100'}
            />
            <StatsCard
              image="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=1920&q=75"
              title={'LOANS'}
              stat={'100% online process. Instant offers. Affordable Rate of Interest on loans'}
              color={'yellow.100'}
            />
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={{ base: 4, md: 3 }} spacing={{ base: 5, lg: 8 }} mb={10}>
            <StatsCard
              image="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=1920&q=75"
              title={'BUY NOW PAY LATER'}
              stat={'Short-term financing that allows consumers to make purchases and pay for them over time.'}
              color={'pink.100'}
            />
            <StatsCard
              image="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=1920&q=75"
              title={'SAVING ACCOUNTS'}
              stat={'ZET offers a range of savings accounts that suit your personal banking needs'}
              color={'orange.100'}
            />
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}
