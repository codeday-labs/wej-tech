import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect }  from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';


import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
  } from '@chakra-ui/react'

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // destructuring:
    // since formData has two variables already
    // left side variables will get values of fromData's variables
    const { email, password } = formData;

    // extracting:
    // "..." means to extract all of the object's properties
    // so whatever properties of formData is changed, it will change without specific naming of it
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        login(email, password)

    }

    // if user is auth, then go homepage
    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <Flex
            height='100vh'
            alignItems='center'
            justifyContent='center'
            bgImage="url(https://i.redd.it/5oxq3tjlfo821.jpg)"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                <Heading>Sign In</Heading>
                <Text mb={3}>Sign into your Account</Text>
                <form onSubmit={e => onSubmit(e)}>
                    <FormControl>
                        <FormLabel mb={3}>Email</FormLabel>
                        <Input
                            type='email'
                            name='email'
                            placeholder='Email'
                            onChange={e => onChange(e)}
                            required
                            mb={3}
                            variant='filled'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb={3}>Password</FormLabel>
                        <Input
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                            mb={3}
                            variant='filled'
                        />
                    </FormControl>
                        <Button
                            mb={6}
                            type='submit'
                            colorScheme='whatsapp'
                        >
                        Login
                        </Button>
                </form>

                <Text>
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </Text>
                <Text>
                    Forgot your password? <Link to='/reset-password'>Reset Password</Link>
                </Text>
            </Flex>
        </Flex>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
    
// export default Login;
export default connect(mapStateToProps, { login })(Login);
// export default connect(null, {})(Login);
