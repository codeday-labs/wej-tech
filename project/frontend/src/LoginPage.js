import { Flex, Heading, Input, Button, Box, Text, Spacer, Stack, HStack, VStack, Center, Container } from '@chakra-ui/react';
import React, { useState } from 'react';

const LoginPage = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleButtonPressed = () => {
        // prints out the email that has been typed
        alert(email)

        // leave for later, but to note: used in SignupPage.js
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
    }

    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                <Heading mb={6}>Login</Heading>
                <Input
                    placeholder='Email'
                    variant='filled'
                    mb={3}
                    type='email'
                    onChange={event => setEmail(event.target.value)}
                />
                <Input
                    placeholder='Password'
                    variant='filled'
                    mb={3}
                    type='password'
                    onChange={event => setPassword(event.target.value)}
                />
                <Button
                    colorScheme='teal'  
                    onClick={handleButtonPressed}
                >
                    Login
                </Button>
            </Flex>
        </Flex>

    )
}

export default LoginPage