import React, { Fragment } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

const Navbar = ({ logout, isAuthenticated }) => {

    // login and signup
    const guestLinks = () => (
        <Fragment>
            <Flex alignItems='right'>
                <Link to='/login'>
                    <Button>Log In</Button>
                </Link>
                <Link to='/signup'>
                    <Button>Sign Up</Button>
                </Link>
            </Flex> 
        </Fragment>
    )

    // logout button
    const authLinks = () => (
        <Fragment>
            <Flex alignItems='right'>
                    <Button
                        onClick={logout}
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
                    <Button>Home</Button>
                </Link>
                <Link to='/calculate'>
                    <Button>Calculate</Button>
                </Link>
                <Link to ='/community'>
                    <Button>Community</Button>
                </Link>
                <Link to ='/gettestpage'>
                    <Button>GET TEST PAGE</Button>
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