import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
  import { FaDiscord, FaMedium, FaTwitter } from 'react-icons/fa'
  import {MdEmail} from 'react-icons/md'
  import Link from 'next/link'
//   import { LogoIcon } from '@/components/icons/Logo';
  import { useRouter } from "next/router";
  
  const Navbar = () => {
    const router = useRouter();
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="nav" mb={10}>
            <Flex justify="space-between" align={'center'}>
              {
                !isDesktop && (
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                )
              }
              <Link href="/">
                {/* <LogoIcon cursor="pointer" w={['40%', 40]} /> */}
              </Link>
              {isDesktop ? (
                <ButtonGroup variant="link" spacing="8">
                  <Link href="/">
                    <Button color={router.pathname == "/" ? "black" : ""}>Jobs</Button>
                  </Link>
                  <Button>About</Button>
                  <Button>Resources</Button>
                </ButtonGroup>
              ) : null}
              {
                isDesktop ? (
                  <Flex align='center'>
                    <HStack spacing={3}>
                      <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
                      <Box as='a' href='https://discord.gg/rethinkable' target='_blank'><FaDiscord size={20} /></Box>
                      </Box>
                      <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
                          <Box as='a' href='https://twitter.com/rethinkablexyz' target='_blank'><FaTwitter size={20} /></Box>
                      </Box>
                      <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
                          <Box as='a' href='https://medium.com/@rethinkablexyz' target='_blank'><FaMedium size={20} /></Box>
                      </Box>
                      <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
                          <Box as='a' href='mailto:hello@rethinkable.xyz' target='_blank'><MdEmail size={20} /></Box>
                      </Box>
                    </HStack>
                    
                  </Flex>
                ) : (
                  <HStack>
                    <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
                        <Box as='a' href='https://twitter.com/rethinkablexyz' target='_blank'><FaTwitter size={12} /></Box>
                    </Box>
                    <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
                        <Box as='a' href='https://medium.com/@rethinkablexyz' target='_blank'><FaMedium size={12} /></Box>
                    </Box>
                  </HStack>
                )
              }
            </Flex>
        </Box>
    )
  }
  
  export default Navbar;