import styled from 'styled-components';

export const NavContainer = styled.div`
    background-color: #fff;
    width:100%;
    height:10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    @media screen and (max-width:550px){
        justify-content: center;
    }
`;

export const Logo = styled.h2`
    font-size: 25px;
    color: #92876b;
    margin-left:50px;
    @media screen and (max-width:550px){
        margin:0;
    }
    
    
`;

export const NavLinksContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin-right: 100px;
    display: flex;
    align-items: center;
    float: right;
    @media screen and (max-width:550px){
        display:none;
    }
`;
export const NavLinks = styled.li`
cursor: pointer;
    margin: 0 20px;
`;