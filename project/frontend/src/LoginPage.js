import { Flex, Heading, Input, Button, Box, Text, Spacer, Stack, HStack, VStack, Center, Container } from '@chakra-ui/react';
import React, { Component } from 'react';

const LogIn = () => (
    <>
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                <Heading mb={6}>Sign Up</Heading>
                <Input placeholder='First Name' variant='filled' mb={3} type='text'/>
                <Input placeholder='Last Name' variant='filled' mb={3} type='text'/>
                <Input placeholder='Phone Number' variant='filled' mb={3} type='tel'/>
                <Input placeholder='Address' variant='filled' mb={3} type='text'/>
                <Input placeholder='Email Address' variant='filled' mb={3} type='email'/>
                <Input placeholder='Enter Password' variant='filled' mb={3} type='password'/>
                <Input placeholder='Confirm Password' variant='filled' mb={6} type='password'/>
                <Button colorScheme='teal'>Sign Up</Button>
            </Flex>
        </Flex>
    </>
)

const LoginPage = () => {
    return (
        <LogIn />
    )
}

export default LoginPage