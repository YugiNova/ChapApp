import { Avatar } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const ButtonConversation = styled(NavLink)`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap:1rem;
    justify-items: start;
    align-items: center;
    border-radius: 1rem;
    padding: 0.5rem;
    text-decoration: none;

    background: transparent;
    border: none;

    &.active{
        background: ${props => props.theme.listItemActive};
    }
`

export const AvatarIcon = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/3;

    width: 3rem;
    height: 3rem;
`

export const Title = styled.h5`
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
    font-size: 1.25rem;
    color: ${props => props.theme.primaryFont};
`

export const LastMess = styled.h6`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    font-weight: normal;
    font-size: 1rem;
    color: ${props => props.theme.secondaryFont};
`