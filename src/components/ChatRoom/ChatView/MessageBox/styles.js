import { Avatar } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.position.columnTemplate};
    grid-template-rows: auto;
    column-gap: 0.5rem;
    margin: 0.5rem 0;

    justify-items: ${props => props.position.justifyItem};;
    align-items: start;

    ::-webkit-scrollbar {
      width: 0;
    }
`

export const AvatarIcon = styled(Avatar)`
    grid-column: ${props => props.position.avatarColumn};;
    grid-row: 1/2;

    width: 2.5rem;
    height:2.5rem;
`

export const MessageWrapper = styled.div`
    grid-column: ${props => props.position.messColumn};;
    grid-row: 1/2;
    max-width: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;

    height: auto;
    
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    color: ${props => props.theme.primaryFont};
    background: ${props => props.theme.primaryColor};

    font-weight: normal;

    
`