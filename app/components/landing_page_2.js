import { Box, Flex, Heading,Text,Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const cards = [
  { id: 1, color: 'black.300' ,image:'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=640&q=75'},
  { id: 2, color: 'black.300' , image : 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=640&q=75'},
  { id: 3, color: 'black.300', image:'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=640&q=75' },
  { id: 4, color: 'black.300', image:'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=640&q=75' },
  { id: 5, color: 'black.300',image:'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=640&q=75' },
  { id: 6, color: 'black.300',image:'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStandardChartered.6a91f4a9.png&w=640&q=75' },
  { id: 7, color: 'black.300',image:'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=640&q=75' },
  { id: 8, color: 'black.300',image:'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYesBank.44b87df7.png&w=640&q=75' },
  // Add more cards as needed
];
export default function LandingPage2() {
    const [animationDuration, setAnimationDuration] = useState(2); // Adjust the animation duration as needed
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setOffset((offset) => (offset - 100) % (cards.length * 100));
      }, animationDuration * 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [animationDuration]);
  
    return (
        <>
        <Center>
        <Heading >Top Brands on ZET</Heading></Center>
<Center><Text pb={10} pt={2}> We are trusted by best brand in the country</Text></Center>
      <Flex justifyContent="center" position="relative" overflow="hidden" h={64} mx={"15%"}>
        {cards.map((card, index) => (
          <Box
            key={card.id}
            w={64}
            h={39}
            bg={card.color}
            borderRadius="md"
            ml={index > 0 ? 4 : 0}
            position="relative"
            transform={`translateX(${offset + index * 100}%)`}
            transition={`transform ${animationDuration}s linear`}
            animationiterationcount="infinite"
            
          >
             <img src={card.image} alt={`Card ${card.id}`} style={{ width: '100%', height: '100%' }} />
          </Box>
        ))}
      </Flex>
      </>
    );
  }
  
  