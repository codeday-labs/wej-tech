import { Flex, Heading, } from '@chakra-ui/react';
import React from 'react';


export const FAQ = () =>{

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
            
                <Heading size = "4xl"  >This page is currently Under Construction!</Heading>
      
            </Flex>
        </Flex>




      
    );
   
}

export default FAQ