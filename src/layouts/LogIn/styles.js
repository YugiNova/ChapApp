import styled from "styled-components";

export const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 100vh;

    @media screen and (min-width: 300px) and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`

export const CoverImage = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;

    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 300px) and (max-width: 600px){
        display: none;
    }
`

export const Title = styled.h2`
     background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
     -webkit-background-clip: text;
     color: transparent;
     font-size: 8rem;
     text-align: center;
`

export const FormContainer = styled.div`
    grid-row: 1/2;
    grid-column: 2/3;

    @media screen and (min-width: 300px) and (max-width: 600px){
        grid-row: 1/2;
        grid-column: 1/2;
    }
`