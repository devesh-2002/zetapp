import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text
      fontWeight="500"
      fontSize="lg"
      mb={2}
      color="white"
      zIndex="1" // Set z-index to bring text to front
    >
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <Link
      bg={useColorModeValue('white', 'white')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      href={href}
      _hover={{
        textDecoration: 'none',
        bg: 'white',
      }}
    >
      {children}
    </Link>
  );
};

export default function Footer() {
  const [shouldDisplayImage, setShouldDisplayImage] = useState(false);

  useEffect(() => {
    setShouldDisplayImage(window.innerWidth <= 768);

    const handleResize = () => {
      setShouldDisplayImage(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box color="white" position="relative" bg="url(https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=3840&q=100)">
      {shouldDisplayImage && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex="-10" // Set z-index to send image to back
          backgroundImage="url(https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=3840&q=100)"
          backgroundSize="cover"
          backgroundPosition="center"
        />
      )}
      <Container maxW="6xl" py={10} align="center">
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href="#">About Us</Link>
            <Link href="#">Partner with Us</Link>
            <Link href="#">Blog</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Legal</ListHeader>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </Stack>
          <Stack align="flex-start">
            <Stack align="flex-start">
              <ListHeader>Support</ListHeader>
              <Stack align="flex-start" direction="row" spacing={2}>
                <FaEnvelope />
                <Link
                  href="#"
                  _hover={{
                    textDecoration: 'none', // Remove underline on hover
                  }}
                >
                  hi@zetaapp.in
                </Link>
              </Stack>
              <Stack align="flex-start" direction="row" spacing={2}>
                <FaPhone />
                <Link
                  href="#"
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  +91-7417274072
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Social</ListHeader>
            <Stack direction="row" spacing={6} color="blue.500">
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
