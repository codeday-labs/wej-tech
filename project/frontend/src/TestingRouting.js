import React from 'react';
import SignupPage from './SignupPage';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';

const TestingRouting = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/frontend' element={<Homepage />} />
                <Route exact path='/frontend/signup' element={<SignupPage />} />
            </Routes>
        </Router>
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