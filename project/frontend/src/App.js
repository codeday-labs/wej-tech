import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './Homepage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
// })   

const App = () => {
    return (
        <ChakraProvider>
            <Homepage />
        </ChakraProvider>
    )
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);