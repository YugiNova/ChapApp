import { Avatar, Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr auto;
  align-items: center;
  justify-items: center;
  background: ${(props) => props.theme.listItemActive};
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.primaryColor};
  max-height: 6.7rem;
`;

export const AvatarIcon = styled(Avatar)`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h3`
  width: 100%;
  text-align: left;
  grid-column: 2/3;
  grid-row: 1/2;
  margin: 0 0.5rem;
  font-size: 1rem;

  color: ${(props) => props.theme.primaryFont};
`;

export const Email = styled.h3`
  width: 100%;
  text-align: left;
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 0 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.secondaryFont};
`;

export const AddButton = styled(Button)`
  grid-column: 1/3;
  grid-row: 3/4;

  width: auto;
  height: auto;
  margin-top: 0.5rem;
  background: ${(props) => props.status==="Invite"?props.theme.primaryColor:"transparent"};
  border: 1px solid ${(props) => props.status==="Invite"?props.theme.primaryColor:props.theme.secondaryFont};
  color: ${(props) => props.status==="Invite"?props.theme.primaryFont:props.theme.secondaryFont};

  &:hover{
    background: transparent;
    border: 1px solid ${(props) => props.theme.primaryColor} !important;
    color: ${(props) => props.theme.primaryColor} !important;
  }
`;
