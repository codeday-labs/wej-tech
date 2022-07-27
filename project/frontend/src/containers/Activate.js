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
        <Flex flexDirection='column'>

            <Heading>Verify your account</Heading>
            <Button
                onClick={verify_account}
            >
            Verify
            </Button>

        </Flex>
    );
};

// export default Login;
export default connect(null, { verify })(Activate);
// export default connect(null, {})(Login);
