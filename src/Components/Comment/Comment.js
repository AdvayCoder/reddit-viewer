import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const Comment = ({author, body}) => {
    return (
        <Box as='div' mt='10px' >
            <Text fontSize='0.8rem' color='#2D2F39' fontWeight={600}>u/{author}</Text>
            <Text fontSize='1.2rem'>{body}</Text>
        </Box>
    )
}

export default Comment