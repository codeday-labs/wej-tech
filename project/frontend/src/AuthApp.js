import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import store from './store';

import Activate from './containers/Activate';
import Home from './containers/Home';
import Login from './containers/Login';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Signup from './containers/Signup';
import Layout from './hocs/Layout';
import Community from './containers/Community';
import Calculate from './containers/Calculate';
import CalculatePage from './containers/CalculatePage';
import Analysis from './containers/Analysis';
import FAQ from './containers/FAQ';


const AuthApp = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                    <Router>
                            <Layout>
                                <Routes>
                                    <Route exact path='/' element={<Home />}/>
                                    <Route exact path='/login' element={<Login />}/>
                                    <Route exact path='/signup' element={<Signup />}/>
                                    <Route exact path='/reset-password' element={<ResetPassword />}/>
                                    <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />}/>
                                    <Route exact path='/activate/:uid/:token' element={<Activate />}/>
                                    <Route exact path='/community' element={<Community />}/>
                                    <Route exact path='/calculate' element={<Calculate />}/>
                                    <Route exact path='/calculatepage' element={<CalculatePage />}/>
                                    <Route exact path='/analysis' element={<Analysis />}/>
                                    <Route exact path='/faq' element={<FAQ />}/>
                                </Routes>
                            </Layout>
                    </Router>
            </ChakraProvider>
        </Provider>
    )
}

const appDiv = document.getElementById('app');
render(<AuthApp />, appDiv);