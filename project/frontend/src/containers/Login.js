// import React, {useState} from 'react';
// import {Link, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
 
// const Login = (login, isAuthenticated ) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password:''
//     });
    
//     const {email,password} = formData;
//     const onChange = e => setFormData ({ ...formData,[e.target.name]: e.target.value});
//     const onSubmit = e => {
//         e.preventDefault();

//         //login(email,password)
//     };

//         //is the user authenticated?
//         // reditrrect them to homepage
        
//         return (
//             <div className = 'container mt-5'>
//                 <h1>Sign In</h1>
//                 <p> Sign into your Account</p>
//                 <form onSubmit = {e => onSubmit(e)}>
//                     <div className = 'form-group'>
//                         <input 
//                             className = 'form-control'
//                             type = 'email'
//                             placeholder = 'Email'
//                             name = 'email'
//                             value = {email}
//                             onChange = {e=> onChange(e)}
//                             required
//                             />
//                     </div>
//                     <div className = 'form-group'>
//                         <input 
//                             className = 'form-control'
//                             type = 'password'
//                             placeholder = 'Password'
//                             name = 'password'
//                             value = {password}
//                             onChange = {e=> onChange(e)}
//                             minLength = '6'
//                             required
//                             />
//                     </div>
//                     <button className = 'btn btn-primary' type = 'submit'> Login</button>

//                 </form>
//                 <p className = 'mt-3'> 
//                 Don't have an account? <Link to = '/frontend/signup'> Sign up</Link>
//                 </p>
//                 <p className = 'mt-3'> 
//                 Forgot your password? <Link to = '/frontend/reset-password'> Reset Password</Link>
//                 </p>
//             </div>
            
//         )
// };

// // const mapStateToProps = state => ({
// //     //is authenticated?
// // });
// export default connect(null,{loginFunction})(Login);


import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };


    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <br />
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);