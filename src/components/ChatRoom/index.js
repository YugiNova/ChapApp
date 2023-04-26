import FriendList from "./FriendList";
import ChatView from "./ChatView";
import SideBar from "./SideBar";
import { ChatViewWrapper, Container, OutletWrapper, SideBarWrapper } from "./styles";
import { Outlet } from "react-router-dom";

const ChatRoom = () => {
  return (
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <ChatViewWrapper>
        <ChatView />
      </ChatViewWrapper>
    </Container>
  );
};

export default ChatRoom;
