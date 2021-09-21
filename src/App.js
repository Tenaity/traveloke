import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
const App = ({ Component }) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Component /> */}
      <Navbar />
      <Hero />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
