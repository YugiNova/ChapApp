import FriendList from "./FriendList";
import ChatView from "./ChatView";
import SideBar from "./SideBar";
import {Container} from './styles';
import { Outlet } from "react-router-dom";


const ChatRoom = () => {
    

    return(
        <Container>
            <SideBar/>
            <Outlet/>
            <ChatView/>
        </Container>
    )
}

export default ChatRoom;