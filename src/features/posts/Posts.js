import React from 'react';
import { Grid, Center } from '@chakra-ui/react';
import Post from './Post';
import { selectFiltererdPosts } from './postsSlice';
import { clearSearch } from '../search/searchSlice';
import { useSelector, useDispatch } from 'react-redux';

function Posts() {

    const dispatch = useDispatch();

    // dispatch(clearSearch());

    const posts = useSelector(selectFiltererdPosts);

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