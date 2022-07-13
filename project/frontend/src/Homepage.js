import { Flex, Heading, Input, Button, Box, Text, Spacer, Stack, HStack, VStack, Center, Container } from '@chakra-ui/react';
import React, { Component } from 'react';


// home, calculate, community, login, signup
const Menu = () => (
    <>
        <p>Home</p>
        <p>Calculate</p>
        <p>Community</p>
        <p>Login</p>
        <p>Sign up</p>
    </>
)

const TopBar = () => (
    <>
        <Flex alignItems='center' justifyContent='space-between' background='#EDF2F7'>
            <Flex alignItems='left' background='#EDF2F7'>
                <Button>Home</Button>
                <Button>Calculate</Button>
                <Button>Community</Button>
            </Flex>
            <Flex alignItems='right'>
                <Button>Log In</Button>
                <Button>Sign Up</Button>
            </Flex>
        </Flex>
    </>
)

// const BottomBar = () => (
//     <>
//         <Flex>
//             <Flex>
//                 <Flex>

//                 </Flex>
//             </Flex>
//         </Flex>
//     </>
// )

const BottomBar1 = () => (
    <>
        <Flex>
            <Box p='4' bg='red.400'>
                <Text>WEJ-Tech</Text>
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'> 
                <Text>Address</Text> 
            </Box>
            <Spacer />
            <Box p='4' bg='blue.400'>
                <Text>Phone</Text> 
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                <Text>Email</Text> 
            </Box>
            <Spacer />
        </Flex>
    </>
)

const BottomBar2 = () => (
    <>
        {/* // For the whole encapsulation of the box
        // - style in a column, the two flexes for wejtech + other  */}
        <Flex direction='column' background='#EDF2F7' margin>

            {/* // Flex for the Wejtech logo/name in the very top middle */}
            <Flex justifyContent='center'>
                <Heading as='h3'>wejtech</Heading>
            </Flex>

            {/* // Be for everything else below Wejtech stuff
            // - style all 3 flexes to be in a row */}
            <Flex justifyContent='space-evenly'>

                {/* // addrs, phone#, email for our company
                // - style in column */}
                <Stack justify='left'>
                    <Text>address</Text>
                    <Text>phone#</Text>
                    <Text>email</Text>
                </Stack>

                {/* <Spacer /> */}

                {/* // faq + policy
                // - style in column */}
                <Stack justify='center'>
                    <Text>FAQ + Policy</Text>
                </Stack>

                {/* <Spacer /> */}

                {/* // signup + input email for newsletter
                // - style in column */}
                <Stack justify='right'>
                    
                    <Text>Sign up for news letter</Text>

                        {/* // Be for button and input for email
                        // - style in a row  */}
                        <Flex>
                            <Input placeholder='example@gmail.com'></Input>
                            <Button colorScheme='twitter'>Sign up</Button>
                        </Flex>
                </Stack>

                {/* <Spacer /> */}

            </Flex>

        </Flex>
    </>
)


const Footer = () => (
    <Container maxW='full' background='#EDF2F7'>
        <WEJT />
        <BelowWEJT />
    </Container>
    
)

const WEJT = () => (
    <Center>
        <Heading as='h3'>WEJ-Tech</Heading>
    </Center>
)

const BelowWEJT = () => (
    <HStack justifyContent='space-evenly'>
        <Center width='250px' background='pink'>
            <Stack>
                <Text>Address:</Text>
                <Text>123 Peck Road, Fremont, CA 94536</Text>
                <Text>Phone Number:</Text>
                <Text>510-123-4567</Text>
                <Text>Email:</Text>
                <Text>wejtech@wejtech.com</Text>
            </Stack>
        </Center>
        <Center width='250px' height='100px'>
            <Text>FAQ + Policy</Text>
        </Center>
        <Center width='250px' height='100px'>
            <Input placeholder='youremail@gmail.com'></Input>
            <Button>Log in</Button>
        </Center>
    </HStack>
)

const LogInExample = () => (
    <>
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder='example@gmail.com' variant='filled' mb={3} type='email'/>
                <Input placeholder='password123' variant='filled' mb={6} type='password'/>
                <Button colorScheme='teal'>Log in</Button>
            </Flex>
        </Flex>
    </>
)

const Background = () => (
    <>
        <Center
            pos="relative"
            h="1080"
            bgImage="url(https://i.redd.it/5oxq3tjlfo821.jpg)"
            bgPosition="center"
            bgRepeat="no-repeat"
        >

            <Stack color='white' align='center'>
                <Heading as='h1' size='4xl'>Eye catching phrase</Heading>
                <Text>Placeholder</Text>
                <Button colorScheme='whatsapp'>Get Started</Button>
            </Stack>

        </Center>
    </>
)

const PageCenter = () => (
    <Header>PageCenter</Header>
)
const Homepage = () => {
    return (
        <div>
            <TopBar />
            <Background />
            <Footer />
        </div>
    )
}

export default Homepage