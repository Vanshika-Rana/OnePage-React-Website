import styled from 'styled-components';
import HeroImg from '../assets/hero.jpg';

export const Hero = styled.div`
    background: url(${HeroImg}) no-repeat center ;
    background-size: cover;
    height:100vh;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Heading = styled.h1`
    color:#333;
    font-weight:200;
    font-size:35px;
    text-align:center;
    padding-top:50px;
    @media screen and (max-width:800px){
        font-size:30px;
    }
    @media screen and (max-width:550px){
        font-size:23px;

        width:80%;
    }
`;

export const SubHeading = styled.p`
    width:35%;
    color: #838383;
    font-weight:400;
    font-size:16px;
    text-align:center;
    padding-top:30px;
    @media screen and (max-width:800px){
        font-size:14px;
        width:50%;
    }
    @media screen and (max-width:550px){
        font-size:12px;
        width:60%;
    }
`;