import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Center, Stack, HStack, Heading, Text, Input } from '@chakra-ui/react';


const Background = () => (
    <>
        <Center
            pos="relative"
            h="900"
            // bgImage="url(https://i.redd.it/5oxq3tjlfo821.jpg)"
            backgroundImage = "/media/post_images/New_Image9.jpg"
            bgPosition="center"
            bgRepeat="no-repeat"
            width= '100vw'
            height= '100vh'
            fit='contain'
            background-size = 'cover'
            

            
            
        >

            <Stack color='white' align='center'>
                <Heading as='h1' size='3xl'>Your Backyard Flora in Numbers</Heading>
                <Heading size = '2xl'>Take Control of your Environmental Decisions</Heading>
                <Link to='/signup'>
                    <Button colorScheme='whatsapp'>Get Started</Button>
                </Link>
                <Link to='/login'>
                    <Text>Log in here, if you already have an account!</Text>
                </Link>
            </Stack>

        </Center>
    </>
)

const Footer = () => (
    <>
        <HStack justifyContent='space-evenly'>
            <Center width='250px' background='white'>
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
            <Link to='/faq'>
                    <Text fontSize='4xl'>FAQ + Policy</Text>
                </Link>
            </Center>
            <Center width='250px' height='100px'>
            </Center>
        </HStack>
    </>
)

const Home = () => {
    return (
        <div>
            <Background />
            <Footer />
        </div>
    )
}

export default Home;