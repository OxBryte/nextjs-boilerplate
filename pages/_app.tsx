// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../internationalization/i18n'
import theme from '../src/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Head></Head> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App