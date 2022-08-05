import React, { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect }  from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { ImageUpload } from '../ImageUpload';
// import { ImageStore } from '../ImageStore';

import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
  } from '@chakra-ui/react'


const Calculate = ({ isAuthenticated }) => {

    const guestView = () => (
        <Fragment>
            <Heading mb={3}>Access Denied</Heading>
            <Text mb={6}>You need to be a member to access the Community tab</Text>
            <Link to='/login'>
                <Button colorScheme='whatsapp'>Login</Button>
            </Link>
            <Text>
                Don't have an account? <Link to='/reset-password'>Sign up</Link>
            </Text>
        </Fragment>    
    )

    const authView = () =>
    (
        <Fragment>
            <ImageUpload></ImageUpload>
            <Heading mb={3}>In construction</Heading>
            <Text></Text>
        </Fragment>     
    )

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
                <Heading mb={3}>Upload Your Image Here</Heading>
            <ImageUpload>Upload Your Image Here</ImageUpload>
                
                <Heading mb={3}>In construction</Heading>
                <Text>The calculate tab is in-progress</Text>
            </Flex>
        </Flex>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { })( Calculate )



//import Image from 'next/image';


