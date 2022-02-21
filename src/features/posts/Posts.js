import React from 'react';
import { Grid, Center } from '@chakra-ui/react';
import Post from './Post';
import { selectPosts } from './postsSlice';
import { useSelector } from 'react-redux';

function Posts() {

    const posts = useSelector(selectPosts);

    const postArr = Object.values(posts).map((post, index) => <Post postData={post} key={index} />)

    return (
        <Center>
            <Grid 
                templateColumns={{'sm': '1', 'xl': 'repeat(2, 1fr)'}}
                gap={10}
                px={10}
            >
                    {postArr}
            </Grid>
        </Center>
    )
}

export default Posts