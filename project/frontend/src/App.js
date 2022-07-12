import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './Homepage';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
    return (
        <ChakraProvider>
            <Homepage />
        </ChakraProvider>
    )
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);