import FriendList from "./FriendList";
import ChatView from "./ChatView";
import SideBar from "./SideBar";
import { ChatViewWrapper, Container, OutletWrapper, SideBarWrapper } from "./styles";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getConversation } from "../../redux/selector";
import Welcome from "./Welcome";

const ChatRoom = () => {
  const conversation = useSelector(getConversation);

  return (
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <ChatViewWrapper>
        {conversation.id === ""?<Welcome/>:<ChatView />}
      </ChatViewWrapper>
    </Container>
  );
};

export default ChatRoom;
