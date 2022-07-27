import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect }  from 'react-redux';
import { verify } from '../actions/auth';
import axios from 'axios';


import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
  } from '@chakra-ui/react'

const Activate = ({ verify }) => {
    const { uid, token } = useParams()
    const [verified, setVerified] = useState(false);

    const verify_account = e => {

        verify(uid, token)
        setVerified(true)
    }

    // if user is auth, then go homepage
    if (verified) {
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

                <Heading mb={6}>Verify your account</Heading>
                <Button
                    onClick={verify_account}
                    colorScheme='whatsapp'
                >
                Verify
                </Button>
            </Flex>
        </Flex>
    );
};

// export default Login;
export default connect(null, { verify })(Activate);
// export default connect(null, {})(Login);
