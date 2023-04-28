import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding-bottom: 0;

  background: ${(props) => props.theme.listBg};
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryFont};
`;

export const SearchBar = styled(Input)`
  border-radius: 0.5rem;
  margin: 1rem 0;
  background: ${(props) => props.theme.sidebarBg};
  border: none;
  color: ${(props) => props.theme.primaryFont};
  font-size: 1.25rem;

  input {
    background: transparent;
    color: ${(props) => props.theme.primaryFont};
  }
`;

export const List = styled.div`
    width: 100%;
    padding: 0 1rem;

    height: 70vh;
    overflow-y: scroll;

    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryFont};

    display: flex;
    justify-content: center;
    align-items: center;

    ::-webkit-scrollbar {
    width: 0;
  }
`
