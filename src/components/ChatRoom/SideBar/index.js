import SignOut from "./SignOut";
import { auth, db } from "../../../firebase/config";
import { Link, Outlet } from "react-router-dom";
import { Avatar, Button } from "antd";
import { MessageOutlined, UnorderedListOutlined, UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { ChatGroup, ChatItem, Container, SettingGroup, UserIcon } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selector";
import ThemeToggle from "./ThemeToggle";
import SettingButton from "./Setting";

const SideBar = () => {
    const theme = useSelector(getTheme);

  return (
    <Container theme={theme}>
      <UserIcon>
        <Avatar
          size={"large"}
          icon={<UserOutlined />}
        />
        <div>{auth.currentUser.name}</div>
      </UserIcon>
      <ChatGroup>
        <ChatItem theme={theme} to={"/Chat/FriendList"}><UnorderedListOutlined /></ChatItem>
        <ChatItem theme={theme} to={"/Chat/Conversations"}><MessageOutlined /></ChatItem>
        <ChatItem theme={theme} to={"/Chat/GroupsChat"}><UsergroupAddOutlined /></ChatItem>
      </ChatGroup>
      <SettingGroup>
        <SettingButton/>
        <ThemeToggle/>
        <SignOut />
      </SettingGroup>
    </Container>
  );
};

export default SideBar;
