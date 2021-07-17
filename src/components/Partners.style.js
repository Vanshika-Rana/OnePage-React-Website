import styled from 'styled-components';

export const PartnerWrapper = styled.div`
    background: #fff;
    min-height:30vh;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media screen and (max-width:800px){
         flex-direction: column;
    }
`;
export const PartnerTitle = styled.h1`

    font-size: 2em;
    color: #333;
    letter-spacing:1px;
    @media screen and (max-width:800px){
         margin: 30px;
    }
    
`;
export const PartnerImage = styled.img`

    width:5%;
    height:15vh;
    background-color:#fff;
    background-position: center;
    background-repeat:no-repeat;
    filter:grayscale(100%);
    cursor:pointer;
    transition:all .5s ease-in-out;
    &:hover{
        filter:grayscale(0);
        transform: rotate(10deg);
    }
    @media screen and (max-width:1030px){
    width:8%;
    height:8vh;
    }
    @media screen and (max-width:800px){
    margin: 20px;;
    width:15%;
    height:15vh;
    }
    @media screen and (max-width:420px){
    margin: 20px;
    width:15%;
    height:15vh;
    }
`;