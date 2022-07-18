import { Flex, Heading, Input, Button, Box, Text, Spacer, Stack, HStack, VStack, Center, Container } from '@chakra-ui/react';
import React, { useState } from 'react';



const Signup = () => (
    <>
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                <Heading mb={6}>Sign Up</Heading>
                <Input
                    placeholder='First Name'
                    variant='filled'
                    mb={3}
                    type='text'
                 />
                <Input placeholder='Last Name' variant='filled' mb={3} type='text'/>
                <Input placeholder='Phone Number' variant='filled' mb={3} type='tel'/>
                <Input placeholder='Address' variant='filled' mb={3} type='text'/>
                <Input placeholder='Email Address' variant='filled' mb={3} type='email'/>
                <Input placeholder='Enter Password' variant='filled' mb={3} type='password'/>
                <Input placeholder='Confirm Password' variant='filled' mb={6} type='password'/>
                <Button
                    colorScheme='teal'
                >
                    Sign Up</Button>
            </Flex>
        </Flex>
    </>
)

const SignupPage = () => {

    const [ firstName, setFirstName ] = useState('');

    const test = () => {
        alert(firstName);
    }

    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                <Heading mb={6}>Sign Up</Heading>
                <Input
                    placeholder='First Name'
                    variant='filled'
                    mb={3}
                    type='text'
                    onChange={event => setFirstName(event.target.value)}
                />
                <Input placeholder='Last Name' variant='filled' mb={3} type='text'/>
                <Input placeholder='Phone Number' variant='filled' mb={3} type='tel'/>
                <Input placeholder='Email Address' variant='filled' mb={3} type='email'/>
                <Input placeholder='Enter Password' variant='filled' mb={3} type='password'/>
                <Input placeholder='Confirm Password' variant='filled' mb={6} type='password'/>
                <Button
                    colorScheme='teal'  
                    onClick={test}
                >
                    Sign Up
                </Button>
            </Flex>
        </Flex>

    )
}

export default SignupPage