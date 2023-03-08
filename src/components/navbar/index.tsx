'use-client'
import {
  Box,
  Button,
  ButtonGroup,
  ButtonSpinner,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'
import Logo from '../../components/assets/pwfl.png'
import { useRouter } from "next/router";
import Image from 'next/image';
import ContainLayout from '../page-layout/container';
import UAuth from '@uauth/js';
import { FaCaretDown } from 'react-icons/fa'


const Navbar = () => {

  const [open, setOpen] = React.useState(false)
  console.log(setOpen)

  // Connect wallet function

  const [connectedAddress, setConnectedAddress] = React.useState('');

  // UAth login function is set here

  const uauth = new UAuth({
    clientID: "f196fade-1a56-49d3-9bf0-74a50e34674d",
    redirectUri: "http://localhost:3000",
    // redirectUri: "https://www.dynastypad.com/",
    scope: "openid wallet",
  });

  // Logout
  const logout = async () => {
    await uauth.logout();

    console.log("Logged out with Unstoppable");

    setConnectedAddress("");
  };

  // Sign in Modal
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup();
      const domainName = authorization.idToken.sub;
      // const walletAddress = authorization.idToken.wallet_address;

      console.log("Logged in with Unstoppable");

      setConnectedAddress(domainName);
    } catch (error) {
      console.error(error);
    }
  };


  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as="nav" mb={10} py='20px' backdropFilter='blur(30px)' position='fixed' w='full' zIndex={1000} color='white'>
      <ContainLayout>
        <Flex justify="space-between" align={'center'}>
          <Box>
            <Image src={Logo} alt='Logo' width={60} />
          </Box>
          {connectedAddress ? (
            <Button type='submit' variant='solid' px={7} py={5} bg='brand.300' rounded='10px' fontSize='12px' _hover={{ color: 'white', bg: 'brand.400' }} onClick={logout}>{connectedAddress.length > 0 &&
              `${connectedAddress.substring(
                0,
                7
              )}...`} </Button>
          ) : (
            <Button fontSize='12px' type='submit' variant='solid' px={7} py={5} bg='brand.300' rounded='10px' _hover={{ color: 'white', bg: 'brand.400' }} onClick={login} >Connect wallet</Button>
          )}
        </Flex>
      </ContainLayout>
    </Box>
  )
}

export default Navbar;