import "../styles/globals.css";
import theme from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";


import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {




  return (
    <ChakraProvider theme={theme}>
    
          <Header />
          <Component {...pageProps} /> <Footer />
      

    
    </ChakraProvider>
  );
}

export default MyApp;
