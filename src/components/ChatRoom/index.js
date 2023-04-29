import FriendList from "./FriendList";
import ChatView from "./ChatView";
import SideBar from "./SideBar";
import {
  ChatViewWrapper,
  Container,
  OutletWrapper,
  SideBarWrapper,
  Wrapper,
} from "./styles";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeChat, getConversation } from "../../redux/selector";
import Welcome from "./Welcome";

const ChatRoom = () => {
  const conversation = useSelector(getConversation);
  const transformChat = useSelector(changeChat);

  return (
    <Wrapper>
      <Container translateX={transformChat}>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <ChatViewWrapper>
          {conversation.id === "" ? <Welcome /> : <ChatView />}
        </ChatViewWrapper>
      </Container>
    </Wrapper>
  );
};

export default ChatRoom;
