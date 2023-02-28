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
import Logo from '../../components/assets/temp.png'
import { useRouter } from "next/router";
import Image from 'next/image';
import ContainLayout from '../page-layout/container';

const Navbar = () => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as="nav" mb={10} py='20px' backdropFilter='blur(30px)' position='fixed' w='full' zIndex={1000}>
      <ContainLayout>
        <Flex justify="space-between" align={'center'}>
          <Box>
            <Image src={Logo} alt='Logo' width={20} />
          </Box>
          <Button>Login</Button>
        </Flex>
      </ContainLayout>
    </Box>
  )
}

export default Navbar;