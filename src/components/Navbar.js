import React from 'react';
import { NavContainer, Logo, NavLinks, NavLinksContainer } from './Navbar.style';


const Navbar = () => {
    return (
        <NavContainer>
            <Logo>.comfort</Logo>
            <NavLinksContainer>
                
                    <NavLinks>Home</NavLinks>
                    <NavLinks>About</NavLinks>
                    <NavLinks>Contact</NavLinks>
                
            </NavLinksContainer>
        </NavContainer>
    )
}

export default Navbar;