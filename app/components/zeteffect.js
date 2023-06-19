import React from 'react';
import { Box, Text, Progress, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';

function ZetEffect() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const isMobile = useBreakpointValue({ base: true, md: false }); // Check if mobile breakpoint

  const cardTextSize = isMobile ? 'xs' : 'xl'; // Adjust font size based on breakpoint

  return (
    <div>
      <Box
        textAlign="center"
        transform="skewY(-5deg)"
        fontWeight="bold"
        textColor="white"
        bg="blue.700"
        my="10%"
        maxW="100%"
        height={500}
      >
        <Box
          bg="blue.400"
          position="relative"
          top="45%" // Adjust the top value here to position the inner box lower
          left="50%"
          transform="translate(-50%, -50%)"
          maxW="60%"
          height="50%"
        >
          <Box
            position="absolute"
            top={0}
            transform={"skewY(5deg)"}
            left={0}
            pt={"10%"}
            mx={"20%"}
            width="100%"
            height="100%"
          >
            <Text fontSize="lg" zIndex={2}>
              The ZET EFFECT
            </Text>
            <Slider {...settings} Index={2}>
              <Text fontSize={cardTextSize} maxW="34%">
                We helped customers in more than 50 cities to get their financial product
              </Text>
              <Text fontSize={cardTextSize} maxW="34%">
                More than Rs.20Cr earned by our agents by selling credit cards and loans
              </Text>
            </Slider>
            <Progress
              value={50}
              maxW="45%"
              size="sm"
              bg="white"
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              zIndex={3}
              mb={"5%"}
              ml={"24%"}
              rounded={'md'}
            />
          </Box>
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=1920&q=75"
            alt=""
            style={{ width: '50%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default ZetEffect;
