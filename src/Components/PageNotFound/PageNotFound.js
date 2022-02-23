import { Link, Center, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

const PageNotFound = () => {
    return (
        <Center h='100vh' w='100vw'>
            <Text fontSize='35px' fontWeight={700} >Oh No! This page doesn't exist.  Click <Link color='#071D87' as={RouterLink} to="/" >here</Link> to go to the home page.</Text>
        </Center>
    )
}

export default PageNotFound;