import { Box, Button, Flex, FormControl, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContainLayout from '../page-layout/container'

export default function Waitlist() {
    return (
        <Box bg='brand.200' py='100px'>
            <ContainLayout>
                <VStack alignItems='center' justifyContent='center' gap='30px' color='white'>
                    <Text fontSize='24px' fontWeight='500' maxW='530px' textAlign='center' >Join waitlist to gain early access and newsletters on upcoming update </Text>
                    <FormControl display='flex' gap='20px' justifyContent='center' alignItems='center'>
                        <Input type='email' placeholder='Enter email' w={350} rounded='10px' px={8} py={7} bg='brand.400' border='none' />
                        <Button type='submit' variant='solid' px={8} py={7} bg='brand.300' rounded='10px'>Join waitlist</Button>
                    </FormControl>
                </VStack>
            </ContainLayout>
        </Box>
    )
}
