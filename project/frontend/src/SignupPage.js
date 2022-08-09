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
    const [ lastName, setLastName ] = useState('');
    const [ telephone, setTelephone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleButtonPressed = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                telephone: telephone,
                email: email,
                password: password
            })
        };
        // sends a req to local host to the create-user page
        // send it with requestOptions that has the "payload" (the body)
        // once response (.then), convert response into json
        // then take data and print it out to the console
        fetch('/appexample/create-user', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
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
                <Input
                    placeholder='Last Name'
                    variant='filled'
                    mb={3}
                    type='text'
                    onChange={event => setLastName(event.target.value)}
                />
                <Input
                    placeholder='Telephone Number'
                    variant='filled'
                    mb={3}
                    type='tel'
                    onChange={event => setTelephone(event.target.value)}
                />
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
                <Input placeholder='Confirm Password' variant='filled' mb={6} type='password'/>
                <Button
                    colorScheme='teal'  
                    onClick={handleButtonPressed}
                >
                    Sign Up
                </Button>
            </Flex>
        </Flex>

    )
}

export default SignupPage