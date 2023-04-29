import { useSelector } from "react-redux";
import { changeChat, getConversation, getTheme, getUser } from "../../../redux/selector";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import { Container } from "./styles";
import { useEffect } from "react";
import { useState } from "react";
import Welcome from "../Welcome";
import { Outlet, useNavigate } from "react-router-dom";

const ChatView = () => {
  const conversation = useSelector(getConversation);
  const theme = useSelector(getTheme);
  const user = useSelector(getUser);
  const transformChat = useSelector(changeChat);
  const navigate = useNavigate();

  return (
    <Container theme={theme} translateX={transformChat}>
        <ChatHeader theme={theme} conversation={conversation} user={user} />
        <ChatBox theme={theme} conversation={conversation} user={user} />
        <ChatInput theme={theme} conversation={conversation} user={user} />
    </Container>
  );
};

export default ChatView;
