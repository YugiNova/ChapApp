import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    background: ${props => props.theme.chatBg};
`

export const Title = styled.h1`
    color: ${props => props.theme.primaryColor};
    font-size: 3rem;
`