import { Stack, Tag, VStack, TagLabel, Heading, Text, Box, Button } from '@chakra-ui/react'
import React from 'react'
import ContainLayout from '../page-layout/container'
import Bg from '../assets/certifiedbg.png'
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
                    <Text maxW='350px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</Text>
                    <Button type='submit' variant='solid' px={8} py={7} bg='brand.300' rounded='10px' w='fit-content'>Join waitlist</Button>
                </VStack>
                <Box>
                    <Image src={Bg} alt=''  width={300}/>
                </Box>
            </Stack>
        </ContainLayout>
    )
}
