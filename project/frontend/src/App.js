import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './Homepage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import SignupPage from './SignupPage';
import TestingRouting from './TestingRouting';


// const theme = extendTheme({
// })   

const App = () => {
    return (
        <ChakraProvider>
            <TestingRouting />
        </ChakraProvider>
    )
}



const appDiv = document.getElementById('app');
render(<App />, appDiv);