import styled from 'styled-components';

export const ContactContainer = styled.div`
   min-height:100vh;
    width:100%;
    background-color: #fff;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContactGrid = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width:70%;
    min-height: 85vh;
    background-color: #aca790;
    margin-bottom: 50px;
`;
export const ContactWrapGrid = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:70%;
    @media screen and (max-width: 1030px){
        flex-direction: column;
    }
`;
export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:45%;
    min-height: 30vh;
    background-color: #fff;
    opacity: 0.8;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover{
        opacity: 1;
        transform: scale(0.9);
    }
    @media screen and (max-width: 1030px){
        margin:20px;
        width:90%;
        min-height: 20vh;
    }
`;

export const ContactHeading = styled.h2`
    font-size: 1.4em;
    font-weight: 200;
    text-align: center;
    @media screen and (max-width:800px){
         font-size: 1.1em;
    }
    @media screen and (max-width:550px){
         font-size: 0.9em;
         
    }
    
`;

export const ContactPara = styled.p`
    font-size: 0.9em;
    font-weight: 300;
    text-align: center;
    @media screen and (max-width:800px){
         font-size: 0.7em;
    }
    @media screen and (max-width:550px){
         font-size: 0.5em;
    }
`;
export const ContactTitle = styled.h1`
font-size:2em;
    color:#aca790;
    width: 60%;
    text-align: center;
    margin-top: 60px;
`;

export const ContactSubtitle = styled.p`
font-size:1em;
    color:#838383;
    width: 60%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;

    @media screen and (max-width:550px){
        font-size: 0.6em;
        width: 80%;
    }
`;