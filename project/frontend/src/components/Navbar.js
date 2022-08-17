import React, { Fragment } from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

const Navbar = ({ logout, isAuthenticated }) => {

    // login and signup
    const guestLinks = () => (
        <Fragment>
            <Flex alignItems='right'>
                <Link to='/login'>
                    <Button colorScheme= 'green' size = 'lg'>Log In</Button>
                </Link>
                
                <Link to='/signup'>
                    <Button colorScheme='green' size = 'lg'>Sign Up</Button>
                </Link>
            </Flex> 
        </Fragment>
    )

    // logout button
    const authLinks = () => (
        <Fragment>
            <Flex alignItems='right'>
                    <Button
                        onClick={logout} size = 'lg' colorScheme='red'
                    >
                    Logout
                    </Button>
            </Flex> 
        </Fragment>
    )

    const logoutHandler = () => (
        logout()
    )

    return (
        <Flex alignItems='center' justifyContent='space-between' background='#EDF2F7'>
            <Flex alignItems='left' background='#EDF2F7'>
                <Link to ='/'>
                    <Button colorScheme= 'green' size = 'lg'>Home</Button>
                </Link>
                <Link to='/calculate'>
                    <Button colorScheme= 'green' size = 'lg'>Calculate</Button>
                </Link>
                <Link to ='/community'>
                    <Button colorScheme= 'green' size = 'lg'>Community</Button>
                </Link>
            </Flex>
            <Flex alignItems='right'>
                {isAuthenticated ? authLinks() : guestLinks()}
            </Flex>
        </Flex>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })( Navbar)