import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { Flex, Spacer, Link, Text } from "@chakra-ui/react";

const NavBar = () => {
    return (
        <nav>
            <Flex justify='space-around' align='center' bg='rgb(86, 148, 241)' grow={'30% 70%'}>
                <Text ml='100px' fontSize={'30px'} fontWeight={700}>Reddit Viewer</Text>
                <Spacer />
                <Flex>
                    <NavLink style={{textDecoration: 'none', fontSize: 25}} to="/">Home</NavLink>
                </Flex>
                <Spacer />
            </Flex>
        </nav>
    )
}

export default NavBar;