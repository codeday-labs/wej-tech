import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect }  from 'react-redux';
import { reset_password_confirm } from '../actions/auth';


import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
  } from '@chakra-ui/react'

const ResetPasswordConfirm = ({ reset_password_confirm }) => {

    const { uid, token } = useParams();

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    })

    // destructuring:
    // since formData has two variables already
    // left side variables will get values of fromData's variables
    const { new_password, re_new_password } = formData;

    // extracting:
    // "..." means to extract all of the object's properties
    // so whatever properties of formData is changed, it will change without specific naming of it
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
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
                        <FormLabel mb={3}>Password</FormLabel>
                        <Input
                            type='password'
                            name='new_password'
                            value={new_password}
                            placeholder='New Password'
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
                            name='re_new_password'
                            value={re_new_password}
                            placeholder='Confirm Password'
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
                        >
                        Reset Password
                        </Button>
                </form>
            </Flex>    
        </Flex>
    );
};

    
// export default Login;
export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
// export default connect(null, {})(Login);
