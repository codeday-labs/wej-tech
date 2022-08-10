import React, { useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';

const Analysis = ({isAuthenticated, props}) => {

    const { state } = useLocation();

    useEffect(() => {
        console.log(state)
    }, [])

    return (
        <Fragment>
            <Text>Oxygen: {state.resOxygen}</Text>
            <Text>Carbon: {state.resCarbon}</Text>
            <Text>Equivalent Miles Driven: {state.milesDriven}</Text>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { })( Analysis )