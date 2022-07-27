import React, { Component } from 'react';
import { render } from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import TestingRouting from './TestingRouting';
//import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Homepage from './containers/Homepage';
import Login from './containers/Login';
import SignupPage from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
// import { Switch } from '@chakra-ui/react';
// import Layout from './hocs/Layout';
// const theme = extendTheme({
// })   







// const App = () => (
//     <Router>
//         <Layout>
//             <Switch>
//                 <Route exact path='/' component={<Home />} />
//                 <Route exact path='/signup' component={<Signup />} />
//                 <Route exact path='/login' component={<Login />} />
//                 <Route exact path='/reset-password' component={<ResetPassword />} />
//                 <Route exact path='/password/reset/confirm/:uid/:token' component={<ResetPasswordConfirm />} />
//                 <Route exact path='/activate/:uid/:token' component={<Activate />} />

//             </Switch>
//         </Layout>
//     </Router>
// );

//     export default App;


const App = () => { // this is to import the routing pages file.
    return (

        //is to style the routing file 
        // <Provider store = {store}>

        <ChakraProvider> 
            <TestingRouting />
        </ChakraProvider>
        // </Provider>
    )
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);