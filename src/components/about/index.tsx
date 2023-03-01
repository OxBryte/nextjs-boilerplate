import { Stack, Tag, VStack, TagLabel, Heading, Text, Box, Button } from '@chakra-ui/react'
import React from 'react'
import ContainLayout from '../page-layout/container'
import Bg from '../assets/Frame.png'
import Image from 'next/image'

export default function About() {
    return (
        <ContainLayout>
            <Stack direction={{ base: 'column', md: 'column', lg: 'row' }} align='center' justify='space-around' color='white' py='120px' >
                <Box>
                    <Image src={Bg} alt='' width={500} />
                </Box>
                <VStack align='left' gap='10px' maxW='550px'>
                    <Tag colorScheme='cyan' borderRadius='full' size='md' w='fit-content'>
                        <TagLabel>
                            About us
                        </TagLabel>
                    </Tag>
                    <Heading fontSize={['38px', '48px']} fontWeight='700' maxW='400px'>Attract new clients through engaging video</Heading>
                    <Text maxW='350px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit ame</Text>
                </VStack>
            </Stack>
        </ContainLayout>
    )
}
