import { Box, Button, Flex, Text, Stack, VStack, List, ListItem, HStack, Divider, ButtonGroup, } from '@chakra-ui/react'
import * as React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaDiscord, FaTwitter, FaMedium } from 'react-icons/fa';
// import { LogoIcon } from '../icons/Logo';
import ContainLayout from '../page-layout/container';
import Image from 'next/image';

const Footer = () => {
    return (
        <ContainLayout>
            <Flex align="center" justify='center' py={{ base: '10px', md: '50px' }}>
                <Stack spacing='60px' width='100%' direction={['column', 'row']} align='end' justifyContent='space-between'>
                    <VStack align='left' gap='10px'>
                        <Text fontSize={{ base: '12px', sm: '14px', }} color='white' fontWeight='500' >The most powerful <br /> social-fi platform.</Text>
                        <HStack spacing='20px'>
                            <Box color='white'>
                                <Box as='a' href='https://discord.gg/rethinkable' target='_blank'><FaDiscord size={20} cursor='pointer' /></Box>
                            </Box>
                            <Box color='white'>
                                <Box as='a' href='https://twitter.com/rethinkablexyz' target='_blank'><FaTwitter size={20} cursor='pointer' /></Box>
                            </Box>
                        </HStack>
                    </VStack>
                    <VStack>
                        <Button alignSelf='end'>Login</Button>
                        <HStack spacing={5} color='white'>
                            <Text>Terms of service</Text>
                            <Text>Privacy Policy</Text>
                        </HStack>
                    </VStack>
                </Stack>
            </Flex>
        </ContainLayout>
    )
}

export default Footer;