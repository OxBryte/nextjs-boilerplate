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
                    <Heading fontSize={['28px', '38px']} fontWeight='700' maxW='400px'>Join our community today and experience the future of social gaming!</Heading>
                    <Text maxW='350px'>At Pwrfl, we believe that connecting with friends and playing games should be easy, fun, and rewarding. Thats why we have created a decentralized social platform that lets you chat, play games, and earn rewards, all in one place. Powered by the latest Web3 technologies, our platform ensures that your data is owned by you and can be accessed anytime, anywhere.</Text>
                </VStack>
            </Stack>
        </ContainLayout>
    )
}
