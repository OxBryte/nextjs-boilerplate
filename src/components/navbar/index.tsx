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

  React.useEffect(() => {
    if (uauth != undefined && connectedAddress != undefined) {
      try {
        uauth.user()
        .then((user) => {
          setConnectedAddress(user.sub)
        })
        .catch((e) => {
          console.log(e);
        })
      } catch (err) {
        console.log(err)
      }
    }
  })

  // Connect wallet function

  const [connectedAddress, setConnectedAddress] = React.useState('')

  // UAth login function is set here

  const uauth = new UAuth({
    clientID: "3b4bfa90-d07e-4e3a-9122-2ce4b8853d7a",
    // redirectUri: "http://localhost:3000",
    redirectUri: "https://www.pwrfl.xyz/",
    scope: "openid wallet",
  });
  
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
  
    // Logout
    const logout = async () => {
      await uauth.logout();
  
      console.log("Logged out with Unstoppable");
  
      setConnectedAddress("");
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
              )}...${connectedAddress.substring(12)}`} </Button>
          ) : (
            <Button fontSize='12px' type='submit' variant='solid' px={7} py={5} bg='brand.300' rounded='10px' _hover={{ color: 'white', bg: 'brand.400' }} onClick={login} >Connect wallet</Button>
          )}
        </Flex>
      </ContainLayout>
    </Box>
  )
}

export default Navbar;