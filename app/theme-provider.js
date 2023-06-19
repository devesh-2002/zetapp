'use client';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.800",
      },
    },
  },
});

export default function ThemeProvider({ children }) {
  return (
    
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  );
}
