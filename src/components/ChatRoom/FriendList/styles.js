import { Button, Input } from "antd";
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

export const Options = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const OptionButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  margin-left: 0.5rem;
  border: none;

  background: ${(props) => props.theme.sidebarBg};
  color: ${(props) => props.theme.primaryFont};
`;

export const FriendCount = styled.h3`
  color: ${(props) => props.theme.primaryFont};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: calc(100vh - 2rem - 9rem);

  overflow-y: scroll;

  padding: 0 1rem;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
