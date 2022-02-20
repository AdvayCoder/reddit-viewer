import React from "react";
import './HomePage.css';
import { Center, Flex, Text, Skeleton, Box, VStack, Spacer } from "@chakra-ui/react";
import Posts from "../../features/posts/Posts";
import { selectHasError, selectIsLoading } from "../../features/posts/postsSlice";
import { useSelector } from "react-redux";

const CardSkeleton = () => {
    return (
        
            /* Desktop */
            <Center>
                <VStack display={['none', 'none', 'flex', 'flex']} w='600px' h='500px' border='1px solid grey' borderRadius={3} m='6' m='10' spacing='50px'>
                    <Skeleton h='70px' w='130px' mt='10px'></Skeleton>
                    <Skeleton w='200px' h='200px' />
                    <Skeleton h='20px' w='200px' />
                </VStack>

                <Flex display={['flex', 'flex', 'none', 'none']} w='70%' h='170px' my='20px' border='1px solid grey'>
                    <Center sx={{flexGrow: 2}}>
                        <Skeleton h='50px' w='100px' fontSize={{'sm': '22', 'lg': '35'}} />
                    </Center>
                    <Skeleton sx={{flexGrow: 1}} w='100px' h='100%' objectFit='contain' />
                </Flex>
            </Center>
    )
}


const HomePage = () => {

    const hasError = useSelector(selectHasError);
    const isLoading = useSelector(selectIsLoading);

    console.log(isLoading)

    return (
        //! there may be an issue with the bg later
        <Flex pt='100px' flexDir='column' w='100vw' h='100vh' overflowX='hidden'>
            {isLoading ? (
                <Box>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </Box>
            ) : (
                !hasError ? (
                    <Posts />
                ) : (
                    <Center mt='300px'>
                        <Text fontSize='3rem' fontWeight={700}>Oh no! There was an error loading the posts!</Text>
                    </Center>
                )
            )}
        </Flex>
    
    )
}

export default HomePage;