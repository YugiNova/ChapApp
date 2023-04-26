import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.button`
  text-decoration: none;
  background: transparent;
  padding: 0.75rem;
  border-radius: 1rem;
  transition: 0.5s ease;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
    color: ${(props) => props.theme.secondaryFont};
  }

  &:hover {
    svg {
      color: ${(props) => props.theme.primaryFont};
    }
  }
`;
