import styled from 'styled-components';


export const ProjectContainer = styled.div`
    min-height:220vh;
    width:100%;
    background-color:#aca790;
    display:flex;
    flex-direction: column;
    

`;

export const ProjectHeading = styled.h2`
    font-size: 2rem;
    margin:3rem 5rem;
    font-weight: 600;
    letter-spacing:1px;
    color: #fff;
    @media screen and (max-width:1030px){
         font-size: 2.5rem;
    }
    @media screen and (max-width:800px){
        font-size: 2.5rem;
    }
    @media screen and (max-width:550px){
        margin-top:3rem;
        margin-bottom:1rem;
        font-size: 2.5rem;
        text-align: center;
    }
    @media screen and (max-width:420px){
        margin-top:3rem;
        margin-bottom:1rem;
        font-size: 2rem;
        text-align: center;
    }

`;

export const ProjectWrapper = styled.div`
    display: flex;
    margin-bottom: 50px;
    width: 100%;

    @media screen and (max-width:1030px){
        flex-direction: column;
    }
    
`;


export const ProjectImageOne = styled.img`
    height:80vh;
    width:30%;
    margin-left:10rem;
    filter:grayscale(1);
    border-radius: 10px;
    
    cursor:pointer;
    transition: all .5s ease-in-out;
    &:hover {
        filter:grayscale(0);
        transform:scale(1.1);
    }

     @media screen and (max-width:1030px){
         margin-top:3rem;
         margin-bottom: 5rem;
        margin-left:13rem;
        width:60%;
        height:80vh;
    }
    @media screen and (max-width:800px){
        margin-top:3rem;
         margin-left:9.5rem;
        width:60%;
        height:80vh;
    }

    @media screen and (max-width:550px){
        margin-left:5rem;
        width:70%;
        height:80vh;
    }
    @media screen and (max-width:420px){
         margin-left:4rem;
        width:70%;
        height:70vh;
    }
     @media screen and (max-width:380px){
         margin-left:3.5rem;
        width:70%;
        height:70vh;
    }
`;
export const ProjectImageTwo = styled.img`
    height:80vh;
    width:30%;
    margin-top:5rem;
    margin-left:10rem;
    filter:grayscale(1);
   border-radius: 10px;
    cursor:pointer;
    transition: all .5s ease-in-out;
    &:hover {
        filter:grayscale(0);
        transform:scale(1.1);
    }
     @media screen and (max-width:1030px){
        margin-top:5rem;
        margin-bottom: 5rem;
        margin-left:13rem;
        width:60%;
        height:80vh;
    }
    @media screen and (max-width:800px){
        margin-top:3rem;
        
        margin-left:9.5rem;;
        width:60%;
        height:80vh;
    }

    @media screen and (max-width:550px){
         margin-left:5rem;
        width:70%;
        height:80vh;
    }
    @media screen and (max-width:420px){
         margin-left:4rem;
        width:70%;
        height:70vh;
    }
    @media screen and (max-width:380px){
         margin-left:3.5rem;
        width:70%;
        height:70vh;
    }
`;