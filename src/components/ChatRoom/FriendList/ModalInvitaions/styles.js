import { Modal } from "antd";
import styled from "styled-components";

export const ModalCustom = styled(Modal)`
  .ant-modal-content {
    background: ${(props) => props.theme.listBg};
  }
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.75rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.primaryColor};
`;

export const List = styled.div`
  height: 20rem;
  overflow-y: scroll;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 6.7rem;
  gap: 1.5rem;

  /* width */
  ::-webkit-scrollbar {
    width: 0;
  }
`;
