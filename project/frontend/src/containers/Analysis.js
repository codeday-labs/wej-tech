import React, { useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
    HStack, Image,

    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,

    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'


const Analysis = ({isAuthenticated, props}) => {

    const { state } = useLocation();

    useEffect(() => {
        console.log(state)
    }, [])

    return (
        // <Fragment>
        //     <Text>Oxygen: {state.resOxygen}</Text>
        //     <Text>Carbon: {state.resCarbon}</Text>
        //     <Text>Equivalent Miles Driven: {state.milesDriven}</Text>
        // </Fragment>

        <Flex
            height='100vh'
            alignItems='center'
            justifyContent='center'
            bgImage="url(https://i.redd.it/5oxq3tjlfo821.jpg)"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            <HStack>
                <Heading color='white'>
                    Put Image Here with white border?
                </Heading>
                <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                    <Heading mb={12}>Your Image Analysis</Heading>

                    {/* Oxygen */}
                    <Stat 
                        mb={12}
                        bgColor='gray.200'
                        borderRadius='10px'
                        border='2px solid white'
                        padding='1rem'

                    >
                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Oxygen</StatLabel>
                                        {/* <Heading as='h3' size='md'>Oxygen</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.resOxygen}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>
                    </Stat>
                    

                    <Heading as='h3' size='md'>Carbon</Heading>
                    <Text mb={12}>{state.resCarbon}</Text>

                    <Heading as='h3' size='md'>Equivalent Miles Driven</Heading>
                    <Text>{state.milesDriven}</Text>

                </Flex>
            </HStack>
        </Flex>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { })( Analysis )