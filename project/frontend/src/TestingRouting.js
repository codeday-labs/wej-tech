import React from 'react';
import SignupPage from './containers/SignupPage';
import Homepage from './containers/Homepage';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
// import { Switch } from '@chakra-ui/react';
//import Layout from './hocs/Layout';

const TestingRouting = () => {
    return (
        
        <Router>
            <Routes>
                <Route path='/frontend' element={<Homepage/>} />
                <Route path='/frontend/signup' element={<SignupPage />} />
                <Route path='/frontend/login' element={<Login />} />
                <Route path='/frontend/activate/:uid/:token' element={<Activate />} />
                <Route path='/frontend/reset-password' element={<ResetPassword  />} />
                <Route path='/frontend/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm  />} />

            </Routes>
        </Router>
       
    )
}



export default TestingRouting

            // {/* <Layout>
            //     <Switch>
            //         <Route exact path='/frontend' component={<Homepage />} />
            //         <Route exact path='/frontend/signup' component={<SignupPage />} />
            //         <Route exact path='/frontend/' element={<Home />} />
            //         <Route exact path='/signup' element={<SignupPage />} />
            //         <Route exact path='/login' element={<Login />} />
            //         <Route exact path='/reset-password' element={<ResetPassword />} />
            //         <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            //         <Route exact path='/activate/:uid/:token' element={<Activate />} />
            //     </Switch>
            // </Layout> */}
            