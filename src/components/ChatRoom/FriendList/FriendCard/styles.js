import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: start;
    align-items: center;
    row-gap: 0;
    column-gap: 0.5rem;
`

export const Avatar = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;

    img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
`

export const Name = styled.h3`
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
    font-size: 1rem;
`

export const Email = styled.h3`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
`


