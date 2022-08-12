import React, { useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
    HStack, Image, Stack, Center,

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
                {/* Image */}
                <Image
                    width='750px'
                    height='750px'
                    fit='scale-down'
                    bgColor='#EDF2F7'
                    src={state.imageDirectory} 
                    borderRadius='10px'
                    border='5px solid white'
                />

                {/* Status */}
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
                        <HStack mb={2.5}>
                            <Stack>
                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>Oxygen Generated</StatLabel>
                                                {/* <Heading as='h3' size='md'>Oxygen</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Calculations provide pounds of oxygen particles generated per year</PopoverHeader>
                                        <PopoverBody>This calcuation provides an estimate of oxygen being generated from this image, given that roughly per tree there are 260 pounds of oxygen generated yearly.</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.resOxygen}{" pounds/year"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>


                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>Carbon Absorbed</StatLabel>
                                                {/* <Heading as='h3' size='md'>Carbon</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Pounds of Carbon Dioxide (CO2) being absorbed in this image per year.</PopoverHeader>
                                        <PopoverBody>This calculation provide an estimate of how much CO2 this image absorbs per year, given that one tree absorbs 48 pounds of CO2 per year.</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.resresCarbon}{" pounds/year"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>

                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>CO2 Absorbed in Equivelance to Miles Driven</StatLabel>
                                                {/* <Heading as='h3' size='md'>Equiv Miles Driven</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Amount of CO2 being absorbed per year that is equivantent to this number of miles being dirven. </PopoverHeader>
                                        <PopoverBody>This calculation provide an estimate of how much CO2 this image absorbs but using miles driven metric. This is based on the estimation that one acre of trees absorb CO2 the equivalent of driving a car 26,000 miles per year.</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.milesDriven}{" miles/year"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>


                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>Oxygen Generated Per Person Per Year</StatLabel>
                                                {/* <Heading as='h3' size='md'>Oxygen Generated Per Person Per Year</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Amount of oxygen generated from this image for this many people per year.</PopoverHeader>
                                        <PopoverBody>This calculations provide an estimate based on the estimation that one acre of trees provide enough oxygen for a family of four in one year.  </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.oxygenPerPerson}{" persons/year"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>
                            </Stack>
                        
                            <Stack>
                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>Water Needed</StatLabel>
                                                {/* <Heading as='h3' size='md'>Water Needed in Gallons Weekly</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Estimated amount of water needed for vegetation in this image to survive weekly.</PopoverHeader>
                                        <PopoverBody>This calculations is an estimate of how many gallons of water is needed weekly based on the estimation that most trees need a minimum of 15 gallons of water per week. </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.waterNeeded}{"Gallons/Week"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>



                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>Water Saved and Generated Daily</StatLabel>
                                                {/* <Heading as='h3' size='md'>Water Saved Daily in Gallons</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Estimated water generated by trees from evapotranspiration</PopoverHeader>
                                        <PopoverBody>This calculations is based on the estimation that one tree release 200-450 gallons of water per day depending on variety and size.</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.waterSaved}{" Gallons/Day"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>



                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>Pollutants Absorbed</StatLabel>
                                                {/* <Heading as='h3' size='md'>Pollutants Absorbed by Vegetation</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Estimated pollutants being absorbed by this image which includes: NOx,Ammonia, SOx and Ozone.</PopoverHeader>
                                        <PopoverBody>This is based on the calculations that one tree absorbs approximately 10 pound of pollutants every year.</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.pollutantsAbsorbed}{" /Yearly"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>


                                <Popover>
                                    <PopoverTrigger>
                                            <HStack cursor='pointer'>
                                                <StatLabel fontSize='md'>Amount of Cooling Provided</StatLabel>
                                                {/* <Heading as='h3' size='md'>Pollutants Absorbed by Vegetation</Heading> */}
                                                <InfoOutlineIcon />
                                            </HStack>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverHeader>Estimated amount of temperature degrees cooled in Fahrenheit due to shade and transpiration</PopoverHeader>
                                        <PopoverBody>This calculation is based on the estimation that one tree can cool down its surroundings by about 2.5 degrees Fahrenheit. </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <StatNumber>{state.cooling}{"°F"}</StatNumber>
                                <StatHelpText>Subtle Text</StatHelpText>
                            </Stack>
                        </HStack>

                        <Popover>
                            <PopoverTrigger>
                                    <HStack cursor='pointer'>
                                        <StatLabel fontSize='md'>Home Value Increase in Percentage</StatLabel>
                                        {/* <Heading as='h3' size='md'>Pollutants Absorbed by Vegetation</Heading> */}
                                        <InfoOutlineIcon />
                                    </HStack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverHeader>Estimated Home Price Increase due to the vegetation being planted and used in this image.</PopoverHeader>
                                <PopoverBody>This calculations is based on the estimation that one tree can increase home value by 6 to 11 percent. </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <StatNumber>{state.homeValue}{"%"}</StatNumber>
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