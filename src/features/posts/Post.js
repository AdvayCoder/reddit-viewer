import { Image, Text, Flex, Spacer, Center, LinkBox } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';
import React from 'react'

const Post = ({postData}) => {
    return (
        <LinkBox as={RouterLink} to={`/post/${postData.link}`} bg='#79C6C3' w='100%' borderRadius={3} _hover={{backgroundColor: '#41A5A2'}}>
            {/* Desktop */}
            {/* <GridItem>
                <VStack display={['none', 'none', 'none', 'flex']} w='600px' h='500px' bg='#79C6C3' borderRadius={15}>
                    <Text fontSize='30' fontWeight={700} textAlign='center'>{postData.title}</Text>
                    <Image maxW='70%' maxH='70%' objectFit='contain' src={postData.resourceUrl} />
                </VStack>
            </GridItem> */}

            {/* Mobile */}
                <Flex>
                    <Center sx={{flexGrow: 2}}>
                        <Text align='center' fontSize={{'sm': '22', 'lg': '35'}} fontWeight={700}>{postData.title}</Text>
                    </Center>
                    <Image sx={{flexGrow: 1}} maxW='30%' maxH='70%' objectFit='contain' src={postData.resourceUrl} />
                </Flex>
        </LinkBox>
    )
}

export default Post;