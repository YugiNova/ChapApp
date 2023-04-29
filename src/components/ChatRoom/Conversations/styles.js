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

  @media screen and (min-width: 300px) and (max-width: 600px){
    
  }
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

  height: calc(100vh -1rem -6.5rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
