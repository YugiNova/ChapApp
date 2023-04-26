import { useSelector } from "react-redux";
import { getConversation, getTheme, getUser } from "../../../redux/selector";
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
  const navigate = useNavigate();

  useEffect(()=>{
    if(conversation.id !== ""){
      navigate("/Chat/Conversations/Messages/Welcome")
    }
    else{

    }

  },[conversation.id])

  return (
    <Container theme={theme}>
        <ChatHeader theme={theme} conversation={conversation} user={user} />
        <ChatBox theme={theme} conversation={conversation} user={user} />
        <ChatInput theme={theme} conversation={conversation} user={user} />
    </Container>
  );
};

export default ChatView;
