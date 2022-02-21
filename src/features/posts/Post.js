import { Image, Text, Flex, Skeleton, Center, LinkBox, VStack } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';
import React from 'react';

const Post = ({postData}) => {


    return (
        <LinkBox as={RouterLink} to={`/post/${postData.id}`} bg='#79C6C3' w='100%' borderRadius={3} _hover={{backgroundColor: '#41A5A2'}}>
            {/* Desktop */}
            <VStack display={['none', 'none', 'flex', 'flex']} w='600px' h='500px' borderRadius={15}>
                <Text fontSize='30' fontWeight={700} textAlign='center'>{postData.title}</Text>
                <Image maxW='70%' maxH='70%' objectFit='contain' src={postData.resourceUrl} />
                <Text color='#5C6071' >{`u/${postData.author}`}</Text>
            </VStack>

            {/* Mobile */}
            <Flex display={['flex', 'flex', 'none', 'none']}>
                {/* <Text ml='5' fontSize='sm' pos='relative' top='-100%' >By: {postData.author}</Text> */}
                    <Center sx={{flexGrow: 2}}>
                        <Text align='center' fontSize={{'sm': '22', 'lg': '35'}} fontWeight={700}>{postData.title}</Text>
                    </Center>
                <Image sx={{flexGrow: 1}} maxW='30%' maxH='70%' objectFit='contain' src={postData.resourceUrl} />
            </Flex>
        </LinkBox>
    )
}

export default Post;