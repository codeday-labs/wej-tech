import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Center, Stack, HStack, Heading, Text, Input, Spacer } from '@chakra-ui/react';


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

            <Stack color='white' align='center' spacing={4}>
                <Heading as='h1' size='4xl' >Your Backyard Flora in Numbers</Heading>
                <Spacer />
                <Heading size = '2xl'noOfLines={3} >Take Control of your Environmental Decisions</Heading>
                <Link to='/signup'>
                    <Button colorScheme='whatsapp' size = 'lg' height='100px' width='400px'>
                        <Text fontSize = '4xl' >Get Started!</Text></Button>
                </Link>
                <Link to='/login'>
                    <Text fontSize='4xl' color = 'floralwhite'>Log in here, if you already have an account!</Text>
                </Link>
            </Stack>

        </Center>
    </>
)

const Footer = () => (
    <>
        <HStack justifyContent='space-evenly'>
            {/* <Center  width='250px' background='white'>
                <Stack variant = 'outline' >
                    <Text>Contact Us Here:</Text>
                    <Text>123 Peck Road, Fremont, CA 94536</Text>
                    <Text>Phone Number:</Text>
                    <Text>510-123-4567</Text>
                    <Text>Email:</Text>
                    <Text>wejtech@wejtech.com</Text>
                </Stack>
            </Center> */}
            <Center width='250px' height='100px'>
            <Link to='/contact'>
                    <Button colorScheme ='green' fontSize='4xl' variant = 'outline'height={100}>Contact Us</Button>
                </Link>
            </Center>
            <Center width='250px' height='100px'>
            <Link to='/faq'>
                    <Button colorScheme ='green' fontSize='4xl' variant = 'outline'height={100}>FAQ + Policy</Button>
                </Link>
            </Center>
            <Center width='250px' height='100px'>
            <Link to='/feedback'>
                    <Button colorScheme ='green' fontSize='4xl' variant = 'outline'height={100}>Feedback</Button>
                </Link>
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