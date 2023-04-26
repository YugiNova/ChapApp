import { Avatar } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1.5rem;
  width: 100%;
  padding: 1rem 1rem;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.secondaryFont};
`;

export const AvatarIcon = styled(Avatar)`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 4rem;
  height: 4rem;
`;

export const Name = styled.h3`
  grid-column: 2/3;
  grid-row: 1/2;
  margin: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.primaryFont};
`;

export const Status = styled.h3`
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 0;
  font-size: 1rem;
  color: ${props => props.theme.secondaryFont};
`;
