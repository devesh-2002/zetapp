import { chakra, Flex, SimpleGrid, Image, Button, Text, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    content:
      "Become a Financial <br>Advisor  and Earn <br>Rs.1 Lakh/Month <br> <br><p>No investment required</p>",
    avatar:
      'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=1920&q=75',
  },
];

function TestimonialCard(props) {
  const { content, avatar } = props;
  const cardRef = useRef(null);
  const fontSize = useBreakpointValue({ base: '18px', md: '25px' }); // Font size for base and md breakpoints

  useEffect(() => {
    cardRef.current.style.transform = 'translateY(20px)'; // Initial position

    // Add a small delay before applying the animation
    setTimeout(() => {
      cardRef.current.style.transition = 'transform 1s ease-in-out';
      cardRef.current.style.transform = 'translateY(-10px) '; // Final position
    }, 100);
  }, []);


  return (
    <Flex
      ref={cardRef}
      boxShadow={'lg'}
      maxW={'900px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={'blue.50'}
      my={10}
      // Adjust the negative margin value as needed
    >
      <Image
        src={avatar}
        height={'100%'}
        width={'50%'}
        alignSelf={'center'}
        pt={-20}
      />
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
        width={'50%'}
      >
        <chakra.h3
          fontFamily={'Inter'}
          fontWeight={'bold'}
          fontSize={fontSize} // Apply the calculated font size
          pb={4}
          color={'blue'}
          dangerouslySetInnerHTML={{ __html: content  }}
        />
        <Button
          bg="white"
          color="black"
          size="lg"
          leftIcon={
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSa9sXH-UqIq4k3Al8yRQsJOvGACmSq_xr4WPymKQf1w&s"
              boxSize={10}
              mr={2} // Add margin to the icon
            />
          }
          mt={4}
          width={'54%'}
          overflow={'hidden'} // Hide overflowing text
          whiteSpace={'nowrap'} // Prevent line breaks
          textOverflow={'ellipsis'} // Display ellipsis for overflow
        >
          <Text fontSize={'sm'} noOfLines={2}>GET IT ON <br/>Google Play</Text>
          
        </Button>
      </Flex>
    </Flex>
  );
}

export default function LandingPage1() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}
      fontSize={'xl'}
    >
      <SimpleGrid mx={'20%'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} key={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
