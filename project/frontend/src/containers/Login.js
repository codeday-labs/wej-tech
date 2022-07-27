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
        <Flex flexDirection='column'>

            <Heading>Sign In</Heading>
            <Text>Sign into your Account</Text>
            <form onSubmit={e => onSubmit(e)}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={e => onChange(e)}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </FormControl>
                    <Button
                        type='submit'
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
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
    
// export default Login;
export default connect(mapStateToProps, { login })(Login);
// export default connect(null, {})(Login);
