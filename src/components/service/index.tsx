import { Box, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import ContainLayout from '../page-layout/container'

export default function Service() {
    return (
        <ContainLayout>
            <VStack alignItems='center' justifyContent='center' py='50px' spacing='30px' color='white'>
                <Flex flexDirection='column' gap='10px' alignItems='center'>
                    <Heading>Magical Experience</Heading>
                    {/* <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text> */}
                </Flex>
                <SimpleGrid columns={[1, 2, 2]} spacing='20px' justifyContent='space-between'>
                    <VStack p='30px' borderWidth='5px' borderColor='brand.500' rounded='20px' maxW='320px' alignItems='left' gap='10px'>
                        <FaUserAstronaut/>
                        <Text>Powered by the latest Web3 technologies, we strive to provide you with the best experience possible.</Text>
                    </VStack>
                    <VStack p='30px' borderWidth='5px' borderColor='brand.500' rounded='20px' maxW='320px' alignItems='left' gap='10px'>
                        <FaUserAstronaut/>
                        <Text>Chat with your friends in a fun and engaging way.</Text>
                    </VStack>
                    <VStack p='30px' borderWidth='5px' borderColor='brand.500' rounded='20px' maxW='320px' alignItems='left' gap='10px'>
                        <FaUserAstronaut/>
                        <Text>Play virtual games and compete with your friends to win tournaments.</Text>
                    </VStack>
                    <VStack p='30px' borderWidth='5px' borderColor='brand.500' rounded='20px' maxW='320px' alignItems='left' gap='10px'>
                        <FaUserAstronaut/>
                        <Text>Effortlessly trade digital assets on our built-in marketplace.</Text>
                    </VStack>
                </SimpleGrid>
            </VStack>
        </ContainLayout>
    )
}
