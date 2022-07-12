import React, { Component } from 'react';
import { render } from 'react-dom';

const App = () => {
    return (
        <h1>Testing react code</h1>
    )
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);