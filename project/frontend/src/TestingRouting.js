import React from 'react';
import SignupPage from './containers/SignupPage';
import LoginPage from './containers/LoginPage';
import Homepage from './containers/Homepage';
import CalculatePage from './containers/CalculatePage';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';

import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './hocs/Layout';

const TestingRouting = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route exact path='/frontend' element={<Homepage />} />
                        <Route exact path='/frontend/signup' element={<SignupPage />} />
                        <Route exact path='/frontend/login' element={<LoginPage />} />
                        <Route exact path='/frontend/calculate' element={<CalculatePage />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    )
}

{/* <Router>
    <Routes>
        <Route exact path='frontend/'><p>You are viewing frontend through the Router path</p></Route>
        <Route path='/frontend/signup' component={LoginPage}></Route>
        <Route path='/frontend/homepage' component={Homepage}></Route>
    </Routes>
</Router> */}

export default TestingRouting