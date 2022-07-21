import { Flex, Heading, Input, Button, Box, Text, Spacer, Stack, HStack, VStack, Center, Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import { axios } from 'axios';
// import {connect} from 'react-redux';

const LoginPage = (login, isAuthenticated) => {

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

    if (isAuthenticated) {
        return <Redirect to='/frontend' />
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
                    required
                />
                <Input
                    placeholder='Password'
                    variant='filled'
                    mb={3}
                    type='password'
                    onChange={event => setPassword(event.target.value)}
                    required
                />
                <Button
                    colorScheme='teal'  
                    onClick={handleButtonPressed}
                >
                    Login
                </Button>
                <Link to='/frontend/signup'>
                    <Text>Don't have an account?</Text>
                </Link>
                <Link to='/frontend/reset-password'>
                    <Text>Forgot your password?</Text>
                </Link>
            </Flex>
        </Flex>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginPage);