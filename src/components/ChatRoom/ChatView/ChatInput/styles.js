import { Button, Input } from "antd";
import EmojiPicker from "emoji-picker-react";
import InputEmojiWithRef from "react-input-emoji";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    justify-items: center;

    padding: 1rem;
    position: relative;
`

export const InputChat = styled(Input)`
    grid-column: 2/3;
    grid-row: 1/2;
    width: 100%;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem 0 0 2rem;
    color: ${props => props.theme.primaryFont};

    border: 1px solid ${props => props.theme.primaryColor};
    border-right: none;
    background: ${props => props.theme.sidebarBg};
    margin-left: 1rem;

    &:focus{
        outline: none;
    }

    ::placeholder{
        color: ${props => props.theme.secondaryFont};
    }
`

export const ButtonSend = styled.button`
    grid-column: 3/4;
    grid-row: 1/2;
    width: auto;
    height: auto;
    padding: 0.5rem 1rem;
    
    border-radius:  0 2rem 2rem 0 ;
    
    border: 1px solid ${props => props.theme.primaryColor};
    border-left: none;

    background: ${props => props.theme.sidebarBg};
    color: ${props => props.theme.primaryColor};
    cursor: pointer;

    svg{
        font-size: 1.25rem; 
    }

    &:hover{
        color: ${props => props.theme.primaryFont};
    }
`

export const EmojiButton = styled.button`
    grid-column: 1/2;
    grid-row: 1/2;
    
    /* margin-right: 1rem; */
    /* height: 3rem;
    width: 3rem; */
    padding: 0.75rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.primaryColor};
    background: transparent;
    border: 1px solid ${props => props.theme.primaryColor};

    svg{
        font-size: 1.25rem; 
    }
`

export const EmojiPickerContainer = styled.div`
    display: ${props => props.display};
    position: absolute;
    top: 0;
    left: 1rem;
    transform: translateY(-100%);
    width: 5rem;
`

