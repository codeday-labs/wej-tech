import React from 'react';
import { Heading } from '@chakra-ui/react';
import { ImageUpload } from '../ImageUpload';
//import ImageUpload from './ImageUpload'; -> if use export default

const CalculatePage = () => {
    return (
        <div>
            <ImageUpload/>
            <Heading>this is the calculate page, yahoooo</Heading>
        </div>
    )
}

export default CalculatePage