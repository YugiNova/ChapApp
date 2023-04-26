import { Button, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

    padding: 1rem;
`

export const InputChat = styled.input`
    width: 94%;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem 0 0 2rem;
    color: ${props => props.theme.primaryFont};

    border: 1px solid ${props => props.theme.secondaryFont};
    border-right: none;
    background: ${props => props.theme.sidebarBg};

    &:focus{
        outline: none;
    }
`

export const ButtonSend = styled.button`
    width: 6%;
    height: auto;
    padding: 0.5rem 0;
    font-size: 1.25rem; 
    border-radius:  0 2rem 2rem 0 ;
    
    border: 1px solid ${props => props.theme.secondaryFont};
    border-left: none;

    background: ${props => props.theme.sidebarBg};

    cursor: pointer;

    &:hover{
        color: white;
    }
`