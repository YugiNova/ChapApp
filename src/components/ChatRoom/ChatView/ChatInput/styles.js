import { Button, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;

    padding: 1rem;
`

export const InputChat = styled.input`
    width: 100%;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem 0 0 2rem;
    color: ${props => props.theme.primaryFont};

    border: 1px solid ${props => props.theme.primaryColor};
    border-right: none;
    background: ${props => props.theme.sidebarBg};

    &:focus{
        outline: none;
    }
`

export const ButtonSend = styled.button`
    width: auto;
    height: auto;
    padding: 0.5rem 1rem;
    font-size: 1.25rem; 
    border-radius:  0 2rem 2rem 0 ;
    
    border: 1px solid ${props => props.theme.primaryColor};
    border-left: none;

    background: ${props => props.theme.sidebarBg};
    color: ${props => props.theme.primaryColor};
    cursor: pointer;

    &:hover{
        color: ${props => props.theme.primaryFont};
    }
`