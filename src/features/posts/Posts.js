import React from 'react';
import { Grid, Center } from '@chakra-ui/react';
import Post from './Post';
import { selectPosts, selectIsLoading } from './postsSlice';
import { useSelector } from 'react-redux';

function Posts() {

    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoading);

    console.log(posts)

    const postArr = posts.map((post, index) => <Post postData={post} key={index} />)

    return (
        <Center>
            <Grid 
                templateColumns='1'
                gap={10}
                px={10}
            >
                    {postArr}
            </Grid>
        </Center>
    )
}

export default Posts