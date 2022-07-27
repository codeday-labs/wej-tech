import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect }  from 'react-redux';
import { reset_password } from '../actions/auth';
import axios from 'axios';


import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
  } from '@chakra-ui/react'

const ResetPassowrd = ({ reset_password }) => {

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    })

    // destructuring:
    // since formData has two variables already
    // left side variables will get values of fromData's variables
    const { email } = formData;

    // extracting:
    // "..." means to extract all of the object's properties
    // so whatever properties of formData is changed, it will change without specific naming of it
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        reset_password(email)
        setRequestSent(true)
    }

    // if user is auth, then go homepage
    if (requestSent) {
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
                <Heading mb={3}>Request Password Reset</Heading>
                <form onSubmit={e => onSubmit(e)}>
                    <FormControl>
                        <FormLabel mb={3}l>Email</FormLabel>
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
                        <Button
                            type='submit'
                            colorScheme='whatsapp'
                        >
                        Reset Password
                        </Button>
                </form>
            </Flex>
        </Flex>
    );
};

    
// export default Login;
export default connect(null, { reset_password })(ResetPassowrd);
// export default connect(null, {})(Login);
