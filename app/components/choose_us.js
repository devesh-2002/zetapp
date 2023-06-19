import React,{useState,useEffect} from 'react';
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

function ChooseUs() {
    const [animate, setAnimate] = useState(false);
    const controls = useAnimation();

  useEffect(() => {
    // Trigger animation after the component is mounted
    setAnimate(true);
  }, []);
  const cardsData = [
    {
      image1: 'https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg',
      heading1: 'Zero Investment',
      text1: 'Build your business without any investment',
      image2: 'https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg',
      heading2: 'Quick Payout',
      text2: 'Direct Payout in your bank account in short time',
    },
    {
      image1: 'https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg',
      heading1: 'Limitless Earnings',
      text1: 'Direct Payout in your bank account in short time',
      image2: 'https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg',
      heading2: 'Training & Upskilling',
      text2: 'Get trained by finance and sales experts',
    },
    {
      image1: 'https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg',
      heading1: 'Customer Support',
      text1: 'Access tools and content to build relationship',
      image2: 'https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg',
      heading2: 'Financial Products',
      text2: 'Trustworthy & high-rated products & categories',
    },
  ];

  return (
    <div bg="white">
      <Box ml="10%">
      <Text fontWeight="bold" fontSize="2xl">
         Why <Box as="span" color="blue">
            Choose Us
          </Box>{' '}
          
        </Text>

        <Text>Why are we loved by our customers</Text>
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=640&q=75"
          alt=""
          width="30%"
        mb={'-45%'}
        />

        <Grid templateColumns="3fr" gap="10%" mx="30%" mb="40%" maxW="30%">
          {cardsData.map((card, index) => (
            <React.Fragment key={index}>
              <Box gridColumn={`2 / span 1`}
                //   opacity={animate ? 1 : 0}
                  transform={`translateY(${animate ? 0 : '30px'})`}
                  transition="opacity 1s, transform 2s"
              >
                <Image src={card.image1} width="100%" alt="" />
                <Text fontWeight={"bold"}>{card.heading1}</Text>
                <Text >{card.text1}</Text>
              </Box>
              <Box gridColumn={`3 / span 1`}
                  opacity={animate ? 1 : 0}
                  transform={`translateY(${animate ? 0 : '30px'})`}
                  transition="opacity 1s, transform 2s"
                  >
                <Image src={card.image2} width="100%" alt="" />
                <Text fontWeight={"bold"}>{card.heading2}</Text>
                <Text >{card.text2}</Text>
              </Box>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ChooseUs;
