import { Flex, Heading, Stack, Text, Center} from '@chakra-ui/react';
import React from 'react';


export const CONTACT = () =>{

    return (
        <Flex
        height='100vh'
        alignItems='center'
        justifyContent='center'
        bgImage="/media/post_images/New_Image9.jpg"
        bgPosition="center center"
        bgRepeat="no-repeat"
        >
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                <Center  width='800px' height='700px'>
                    <Stack >
                        <Text fontSize = '7xl'>Contact Us Here:</Text>
                        <Text fontSize = '2xl'>123 Peck Road, Fremont, CA 94536</Text>
                        <Text fontSize = '2xl'>Phone Number:</Text>
                        <Text fontSize = '2xl'>510-123-4567</Text>
                        <Text fontSize = '2xl'>Email:</Text>
                        <Text fontSize = '2xl'>wejtech@wejtech.com</Text>
                    </Stack>
                </Center>
            </Flex>
        </Flex>




      
    );
   
}

export default CONTACT