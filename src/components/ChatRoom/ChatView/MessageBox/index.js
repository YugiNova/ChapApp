import { useSelector } from "react-redux";
import { getTheme, getUser } from "../../../../redux/selector";
import { AvatarIcon, Container, MessageWrapper } from "./styles";
import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";

const MessageBox = ({ message }) => {
  const user = useSelector(getUser);
  const theme = useSelector(getTheme);

  const right = {
    columnTemplate: "auto 2.5rem",
        justifyItem: "end",
        avatarColumn: "2/3",
        messColumn: "1/2",
  }

  const left ={
    columnTemplate: "2.5rem auto",
        justifyItem: "start",
        avatarColumn: "1/2",
        messColumn: "2/3",
  }

  return (
    <Container position={message.sendUserId === user.uid?right:left} theme={theme}>
      <AvatarIcon
        position={message.sendUserId === user.uid?right:left}
        size={"large"}
        icon={message.sendUserId === user.uid?<UserOutlined />:""}
        src={message.sendUserId !== user.uid?"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80":""}
      />
      <MessageWrapper position={message.sendUserId === user.uid?right:left} theme={theme}>
        {message.text}
      </MessageWrapper>
    </Container>
  );
};

export default MessageBox;
