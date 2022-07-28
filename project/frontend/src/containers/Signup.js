import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect }  from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';


import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
  } from '@chakra-ui/react'

const Signup = ({ signup, isAuthenticated }) => {

    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        user_name: "",
        password: "",
        re_password: "",
    })

    // destructuring:
    // since formData has two variables already
    // left side variables will get values of fromData's variables
    const { email, user_name, password, re_password } = formData;

    // extracting:
    // "..." means to extract all of the object's properties
    // so whatever properties of formData is changed, it will change without specific naming of it
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        
        if (password === re_password) {
            signup(email, user_name, password, re_password);
            setAccountCreated(true);
        }
    }

    // if user is auth, then go homepage
    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    if (accountCreated) {
        return <Navigate to='/login' />
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

                <Heading>Sign Up</Heading>
                <Text mb={3}>Create Account</Text>
                <form onSubmit={e => onSubmit(e)}>
                    <FormControl>
                        <FormLabel mb={3}>Email</FormLabel>
                        <Input
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            onChange={e => onChange(e)}
                            required
                            mb={3}
                            variant='filled'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb={3}>Name</FormLabel>
                        <Input
                            type='text'
                            name='user_name'
                            value={user_name}
                            placeholder='Username'
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
                            value={password}
                            placeholder='Password'
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                            mb={3}
                            variant='filled'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb={3}>Password</FormLabel>
                        <Input
                            type='password'
                            name='re_password'
                            placeholder='Confirm Password'
                            value={re_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                            mb={3}
                            variant='filled'
                        />
                    </FormControl>
                        <Button
                            type='submit'
                            colorScheme='whatsapp'
                            mb={6}
                        >
                        Register
                        </Button>
                </form>

                <Text>
                    Already have an account? <Link to='/login'>Login</Link>
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
export default connect(mapStateToProps, { signup })(Signup);
// export default connect(null, {})(Login);
