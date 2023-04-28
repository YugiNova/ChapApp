import { Input, Modal } from "antd";
import styled from "styled-components";

export const ModalCustom = styled(Modal)`
  .ant-modal-content {
    background: ${(props) => props.theme.listBg};
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.listBg};
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.75rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.primaryColor};
`;

export const SearchBar = styled(Input)`
  width: 100%;
  background: ${(props) => props.theme.sidebarItemActive};
  border: none;
  font-size: 1.25rem;
  color: ${(props) => props.theme.primaryFont};
  margin-bottom: 1rem;

  input {
    background: ${(props) => props.theme.sidebarItemActive};
    color: ${(props) => props.theme.primaryFont};

    ::placeholder {
      color: ${(props) => props.theme.secondaryFont};
    }
  }
`;

export const List = styled.div`
  height: 20rem;
  overflow-y: scroll;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 6.7rem;
  gap: 1.5rem;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
