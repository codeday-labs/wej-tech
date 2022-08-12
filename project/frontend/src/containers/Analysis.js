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
                <Flex direction='column' background='#EDF2F7' p={10} rounded={6}>
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


                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Carbon</StatLabel>
                                        {/* <Heading as='h3' size='md'>Carbon</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.Carbon}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>

                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Equiv Miles Driven</StatLabel>
                                        {/* <Heading as='h3' size='md'>Equiv Miles Driven</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.milesDriven}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>


                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Oxygen Generated Per Person Per Year</StatLabel>
                                        {/* <Heading as='h3' size='md'>Oxygen Generated Per Person Per Year</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.oxygenPerPerson}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>



                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Water Needed in Gallons Weekly</StatLabel>
                                        {/* <Heading as='h3' size='md'>Water Needed in Gallons Weekly</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.waterNeeded}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>



                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Water Saved Daily in Gallons</StatLabel>
                                        {/* <Heading as='h3' size='md'>Water Saved Daily in Gallons</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.waterSaved}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>



                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Pollutants Absorbed by Vegetation</StatLabel>
                                        {/* <Heading as='h3' size='md'>Pollutants Absorbed by Vegetation</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.pollutantsAbsorbed}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>


                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Amount of Cooling Provided</StatLabel>
                                        {/* <Heading as='h3' size='md'>Pollutants Absorbed by Vegetation</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.cooling}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>


                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='2xl'>Home Value Increase in Percentage</StatLabel>
                                        {/* <Heading as='h3' size='md'>Pollutants Absorbed by Vegetation</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>What is this calculation?</PopoverHeader>
                                <PopoverBody>Explain significance of this calculation here</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.homeValue}</StatNumber>
                        <StatHelpText>Subtle Text</StatHelpText>



                    </Stat>
                    
{/* 
                    <Heading as='h3' size='md'>Carbon</Heading>
                    <Text mb={12}>{state.resCarbon}</Text>

                    <Heading as='h3' size='md'>Equivalent Miles Driven</Heading>
                    <Text>{state.milesDriven}</Text>

                    <Heading as='h3' size='md'>Oxygen Generated Per Person Per Year</Heading>
                    <Text mb={12}>{state.oxygenPerPerson}</Text>

                    <Heading as='h3' size='md'>Water Needed in Gallons Weekly</Heading>
                    <Text mb={12}>{state.waterNeeded}</Text>

                    <Heading as='h3' size='md'>Water Saved Daily in Gallons</Heading>
                    <Text mb={12}>{state.waterSaved}</Text>

                    <Heading as='h3' size='md'>Pollutants Absorbed by Vegetation</Heading>
                    <Text mb={12}>{state.pollutantsAbsorbed}</Text>

                    <Heading as='h3' size='md'>Amount of Cooling Provided</Heading>
                    <Text mb={12}>{state.cooling}</Text>

                    <Heading as='h3' size='md'>Home Value Increase in Percentage</Heading>
                    <Text mb={12}>{state.homeValue}</Text> */}

                </Flex>
            </HStack>
        </Flex>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { })( Analysis )