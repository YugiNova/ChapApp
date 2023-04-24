import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    min-width: 10rem;
`

export const ButtonConversation = styled(Button)`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: start;
    align-items: center;
    border-radius: 0;
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

export const Title = styled.h5`
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
`

export const LastMess = styled.h6`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    font-weight: normal;
`