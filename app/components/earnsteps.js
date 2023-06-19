import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Button,
  Progress,
} from '@chakra-ui/react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function EarnSteps() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const cardFontSize = isMobile ? 'xs' : 'xl';
  const [slider, setSlider] = useState(null);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        }
        return 0;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      title: 'Step 1',
      text: 'Download the App and Sign Up as a ZET Agent.',
      image: 'https://zetapp.in/static/images/Step3.mp4',
    },
    {
      title: 'Step 2',
      text: 'Register your customers and Recommend final products',
    },
    {
      title: 'Step 3',
      text: 'Start earning up to 1 Lakh Per Month',
      image: 'https://zetapp.in/static/images/Step3.mp4',
    },
  ];

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundRepeat="repeat-y"
            backgroundSize="auto 100%"
            bg="blue.900"
            mb={isMobile ? '5%' : '10%'}
            pt={isMobile ? '3%' : '0'}
          >
            <Center>
              <Text fontSize={isMobile ? 'xl' : '2xl'} color={'white'} fontWeight="bold" pt={isMobile ? '5%' : '0'}>
                Start Earning in 3 Easy Steps
              </Text>
            </Center>
            <Center>
              <Text color={'white'} fontSize={isMobile ? 'lg' : 'xl'} pt={isMobile ? '2%' : '0'}>
                We have created the app to make your earning easy
              </Text>
            </Center>

            <Container size="container.md" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
              >
                <Text
                  fontSize={isMobile ? 'lg' : 'xl'}
                  fontWeight="bold"
                  color={'white'}
                  textAlign="left"
                  maxW={isMobile ? '80%' : '100%'}
                >
                  {card.title}
                </Text>
                <Text
                  fontSize={isMobile ? 'sm' : '2xl'}
                  fontWeight="bold"
                  color={'blue.300'}
                  maxW={isMobile ? '50%' : '40%'}
                  textAlign="left"
                >
                  {card.text}
                </Text>
                <Progress
                  value={progressValue}
                  maxW={isMobile ? '40%' : '45%'}
                  size="sm"
                  colorScheme="blue"
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  zIndex={3}
                  mb={isMobile ? '-5%' : '10%'}
                  rounded={'md'}
                />
                {!isMobile && (
                  <Button
                    maxW={{ base: '100%', md: '31%' }}
                    bgImg={'https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg'}
                    variant="unstyled"
                  />
                )}
              </Stack>
              {card.image && !isMobile && (
               <Box position="absolute" bottom="50%" ml={{ base: '10%', md: '60%' }} transform="translate(50%, 50%)">
               <video src={card.image} width={isMobile ? '100' : '200'} height={isMobile ? '25' : '50'} controls />
             </Box>
              )}
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
