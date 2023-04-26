import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  text-decoration: none;
  background: transparent;
  padding: 0.75rem;
  border-radius: 1rem;
  transition: 0.5s ease;

  svg {
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
