import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  padding: 0.75rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.secondaryFont};
    font-size: 1.25rem;
  }

  &:hover {
    svg {
      color: red;
    }
  }
`;
