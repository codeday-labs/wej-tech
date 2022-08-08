import React, { useEffect, useInsertionEffect, useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import axios from 'axios';
import { display_user } from '../actions/auth';

const baseURL = "http://127.0.0.1:8000/appexample/list-user-view"

const GetTestPage = (isAuthenticated) => {

    const [data, setData] = useState(null);
    // when component loads, it will automatically run "useEffect"
    // useEffect(() => { 
    //     display_user()
    // }, []);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        })
    }, []);

    return (
        <div>
            <Text>{JSON.stringify(data)}</Text>
            <Text>SOMEEHTING 2</Text>
            <Heading>this is the calculate page, yahoooo</Heading>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { })( GetTestPage )