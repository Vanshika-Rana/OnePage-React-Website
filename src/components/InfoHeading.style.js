import styled from 'styled-components';

export const InfoContainer = styled.div`
    display:flex;

    justify-content: center;
    align-items: center;
    padding-top:10px;
    width:100%;
    min-height:30vh;
    color: #fff;
    
`;
export const InfoTitle = styled.div`
    color: #fff;
    text-align: center;
    display:flex;
    flex-direction: column;
    width:30%;
`;
export const InfoHead = styled.h1`
    font-size: 3em;
    @media screen and (max-width:800px){
         font-size: 2.5em;
    }
    @media screen and (max-width:550px){
         font-size: 2em;
    }
`;
export const InfoHeadContent = styled.h1`
    font-weight:200;
    font-size: 1.5em;
    @media screen and (max-width:800px){
         font-size: 1.2em;
    }
    @media screen and (max-width:550px){
         font-size: 0.9em;
    }
`;

export const InfoContent = styled.p`
    border-radius: 20px;
    padding:30px;
    color:#838383;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 1em;
    width:30%;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: rgba(255, 255, 255, 0.9);
        transform: scale(1.1);
    }

    @media screen and (max-width:800px){
         font-size: 0.9em;
         width:40%;
         margin-left: 3rem;
    }
    @media screen and (max-width:550px){
         font-size: 0.7em;
         width:40%;
         margin-left: 1rem;
    }

    

`;