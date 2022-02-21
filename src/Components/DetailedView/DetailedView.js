import { Flex, Text, Box, Image, Skeleton, Center } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadSinglePost, selectSinglePost, selectIsLoading } from "../../features/posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import checkFileType from '../../utils/checkFileType';
import Comment from '../Comment/Comment';


const DetailedView = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSinglePost(`https://www.reddit.com/r/ProgrammerHumor/comments/${id}.json`));
    }, [dispatch]);

    const singlePostData = useSelector(selectSinglePost);
    const isLoading = useSelector(selectIsLoading);

    const PostSeleton = () => {
        return (
            <Flex mt='100px' w='100%' flexDir='column' align='center'>
                <Flex flexDir='column' align='center' sx={{flexGrow: 1}}>
                    <Skeleton my='0.5rem' h='10px' w='80px' />
                    <Skeleton my='0.5rem' h='45px' w='230px' />
                    <Skeleton my='0.5rem' h='400px' w='400px' />
                </Flex>
                <Flex ml='2em' mt='1em' flexDir='column' my='5rem' sx={{flexGrow: 1}}>
                        <Skeleton h='50rem' w='80vw' />
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex>
            {isLoading ? (
                <PostSeleton />
            ) : (
                Object.values(singlePostData).length && (
                    <Flex mt='100px' maxW='100%' flexDir='column'>
                        <Flex flexDir='column' align='center' sx={{flexGrow: 1}}>
                            <Text>u/{singlePostData.main.author}</Text>
                            <Text fontWeight={700} fontSize='30' maxW='700px'>{singlePostData.main.title}</Text>
                            {checkFileType(singlePostData.main.resourceUrl) === 'image' ? (
                                <Image src={singlePostData.main.resourceUrl} maxW='60%' maxH='80%' />
                            ) : (
                                checkFileType(singlePostData.main.resourceUrl) === 'video' ? (
                                    <Box as='video' src={singlePostData.main.resourceUrl} maxW='60%' maxH='80%' />
                                ) : (
                                    <Text>Error loading the file!</Text>
                                )
                            )}
                        </Flex>
                        <Flex ml='2em' mt='1em' flexDir='column' sx={{flexGrow: 1}}>
                                <Text fontWeight={600} align='center'>Comments ({singlePostData.comments.length})</Text>
                                {singlePostData.comments.map((comment, index) => <Comment author={comment.author} body={comment.body} key={index} />)}
                        </Flex>
                    </Flex>
                )  
            )}
        </Flex>
    )
}

export default DetailedView;