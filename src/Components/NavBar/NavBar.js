import React, { useState } from "react";
import './NavBar.css';
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { Flex, IconButton, Text, Button, Link, Box, Center } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsGithub } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';
import Search from "../../features/search/Search";


const NavBar = () => {

    const [display, setDisplay] = useState('none');

    const location = useLocation();

    return (
        <nav>
            <Flex 
                h='70px'
                p='2rem' 
                align='center'
                bg='rgb(86, 148, 241)'
                grow={'30% 70%'}
                position='fixed'
                w='100%'
                zIndex={10}
                top={0}
                justify='space-around'
            >
                {/* Desktop */}
                <Text fontSize={'30px'} fontWeight={700}>
                    <Link as={RouterLink} to='/' _hover={{textDecoration: 'none'}} >
                        Reddit Viewer
                    </Link>
                </Text>
                <Flex w='70%' justify='space-around' align='center' display={['none', 'none', 'flex', 'flex']} >
                    <Box flexGrow={1}>
                        <Button>
                            <NavLink style={{textDecoration: 'none', fontSize: 25}} to="/" >Home</NavLink>
                        </Button>
                    </Box>
                    {location.pathname === '/' && (<Search flexGrow={2} />)}
                    <Link
                        isExternal
                        href='https://github.com/AdvayCoder/reddit-viewer'
                        size='lg'
                        flexGrow={1}
                    >
                        <Center>
                            <BsGithub size={50} />
                        </Center>
                    </Link>
                </Flex>

                {/* Mobile */}
                <IconButton 
                    aria-label="Open Menu" 
                    title='Open Menu' 
                    icon={<GiHamburgerMenu size='sm' />} 
                    display={['flex', 'flex', 'none', 'none']} 
                    size='lg'
                    bg='#1CD9A0'
                    onClick={() => setDisplay('flex')}
                />

                <Flex
                    w='100vw'
                    h='100vh'
                    z-index={20}
                    pos='fixed'
                    top={0}
                    left={0}
                    bg='rgb(86, 148, 241)'
                    overflowY='auto'
                    flexDir='column'
                    display={display}
                >
                    <Flex justify='flex-end'>
                        <IconButton
                            mt={2}
                            mr={2}
                            aria-label='Close Menu'
                            size='lg'
                            icon={ <RiCloseCircleLine size='lg' />}
                            bg='#1CD9A0'
                            onClick={() => setDisplay('none')}
                        />
                    </Flex>
                    <Flex  flexDir='column' align='center'>
                        <Button my='1rem' >
                            <NavLink style={{textDecoration: 'none', fontSize: 25}} to="/">Home</NavLink>
                        </Button>
                        {/* We can implement a search fetaure for mobile, but with the current layout it may not be useful.  Uncomment below to test it. */}
                        {/* {location.pathname === '/' && (<Search />)} */}
                        <Link
                            isExternal
                            href='https://github.com/'
                            size='lg'
                            flexGrow={1}
                            my='1rem'
                            title='Github'
                        >
                            <Center>
                                <BsGithub size={50} />
                            </Center>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </nav>
    )
}

export default NavBar;