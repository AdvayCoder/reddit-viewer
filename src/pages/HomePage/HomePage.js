import React from "react";
import './HomePage.css';
import { Center, Flex, Text } from "@chakra-ui/react";
import Posts from "../../features/posts/Posts";
import { selectHasError } from "../../features/posts/postsSlice";
import { useSelector } from "react-redux";


const HomePage = () => {

    const hasError = useSelector(selectHasError);

    return (
        //! there may be an issue with the bg later
        <Flex pt='100px' flexDir='column' w='100vw' h='100vh' overflowX='hidden'>
            {!hasError ? (
                <Posts />
            ) : (
                <Center mt='300px'>
                    <Text fontSize='3rem' fontWeight={700}>Oh no! There was an error loading the posts!</Text>
                </Center>
            )}
        </Flex>
    
    )
}

export default HomePage;