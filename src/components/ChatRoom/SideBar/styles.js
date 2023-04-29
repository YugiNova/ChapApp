import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 5vh 1fr 5vh;

  background: ${(props) => props.theme.sidebarBg};
  padding: 1rem 0.5rem;

  @media screen and (min-width: 300px) and (max-width: 600px){
    width: 100%;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
  }
`;

export const UserIcon = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: 300px) and (max-width: 600px){
    grid-column: 1/2;
    grid-row: 1/2;

    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ChatGroup = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 300px) and (max-width: 600px){
    grid-column: 2/3;
    grid-row: 1/2;

    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ChatItem = styled(NavLink)`
  text-decoration: none;
  background: transparent;
  padding: 0.75rem;
  border-radius: 1rem;
  transition: 0.5s ease;

  & svg {
    color: ${(props) => props.theme.secondaryFont};
    font-size: 1.25rem;
  }

  &:hover {
    svg {
      color: ${(props) => props.theme.primaryFont};
    }
  }

  &.active {
    background: ${(props) => props.theme.sidebarItemActive};

    svg {
      color: ${(props) => props.theme.primaryFont};
    }
  }
`;

export const SettingGroup = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  @media screen and (min-width: 300px) and (max-width: 600px){
    grid-column: 3/4;
    grid-row: 1/2;

    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
