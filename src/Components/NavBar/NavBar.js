import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h1 class="logo">Reddit Viewer</h1>
            <ul>
                <NavLink to="/">Home</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;