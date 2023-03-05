import { Stack, Tag, VStack, TagLabel, Heading, Text, Box, Button } from '@chakra-ui/react'
import React from 'react'
import ContainLayout from '../page-layout/container'
import Bg from '../assets/frame1.svg'
import Image from 'next/image'

export default function Hero() {
    return (
        <ContainLayout>
            <Stack direction={{ base: 'column', md: 'column', lg: 'row' }} align='center' justify='space-around' color='white' py='120px' >
                <VStack align='left' gap='10px' maxW='550px'>
                    <Tag colorScheme='cyan' borderRadius='full' size='md' w='fit-content'>
                        <TagLabel>
                            Currently on building stage
                        </TagLabel>
                    </Tag>
                    <Heading fontSize={['38px', '48px']} fontWeight='700'>The Most Powerful Social-Fi Platform</Heading>
                    <Text maxW='350px'>Pwrfl is the #1 decentralized social platform for chatting, playing games with friends, and earning rewards.</Text>
                    <Button type='submit' variant='solid' px={7} py={5} bg='brand.300' rounded='10px' _hover={{ color: 'white', bg: 'brand.400' }} w='fit-content'>Join waitlist</Button>
                </VStack>
                <Box>
                    <Image src={Bg} alt=''  width={350}/>
                </Box>
            </Stack>
        </ContainLayout>
    )
}
