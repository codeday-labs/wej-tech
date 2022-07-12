import { Flex, Heading, Input, Button, Box, Text } from '@chakra-ui/react';
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

const BottomBar = () => (
    <>
        <Flex height='' alignItems='center' justifyContent='</>space-between' background='#EDF2F7'>
            <Flex>
                <Text>Hello1</Text>
            </Flex>
            <Flex>
                <Text>Hello2</Text> 
            </Flex>
            <Flex>
                <Text>Hello3</Text> 
            </Flex>
        </Flex>
    </>
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
        <Box
            pos="relative"
            h="1080"
            bgImage="url(https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9468f3c3-5349-4700-b759-237bf692f6aa/38580.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220712T201709Z&X-Amz-Expires=86400&X-Amz-Signature=7549f2ba1874516b57cf7187b14591176222a256276738928a8bb6d8a63458c0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2238580.jpg%22&x-id=GetObject)"
            bgPosition="center"
            bgRepeat="no-repeat"
        />
    </>
)

const Homepage = () => {
    return (
        <div>
            <TopBar />
            <BottomBar />
        </div>
    )
}

export default Homepage