import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Center, Stack, HStack, Heading, Text, Input } from '@chakra-ui/react';

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
                <Link to='/signup'>
                    <Button colorScheme='whatsapp'>Get Started</Button>
                </Link>
                <Link to='/login'>
                    <Text>or if you already have an account</Text>
                </Link>
            </Stack>

        </Center>
    </>
)

const Footer = () => (
    <>
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
                <Button>Newsletter Signup</Button>
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