import React, { useState } from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { Flex, Spacer, IconButton, Text, Button } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseCircleLine } from 'react-icons/ri';

const NavBar = () => {

    const [display, setDisplay] = useState('none');

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
            >
                {/* Desktop */}
                <Text fontSize={'30px'} fontWeight={700}>Reddit Viewer</Text>
                <Spacer />
                <Flex display={['none', 'none', 'flex', 'flex']} >
                    <Button>
                        <NavLink style={{textDecoration: 'none', fontSize: 25}} to="/">Home</NavLink>
                    </Button>
                </Flex>
                <Spacer />

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
                        <NavLink style={{textDecoration: 'none', fontSize: 25}} to="/">Home</NavLink>
                    </Flex>
                </Flex>
            </Flex>
        </nav>
    )
}

export default NavBar;