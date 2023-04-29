import SignOut from "./SignOut";
import { MessageOutlined, UnorderedListOutlined, UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { AvatarIcon, ChatGroup, ChatItem, Container, SettingGroup, UserIcon } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selector";
import ThemeToggle from "./ThemeToggle";
import SettingButton from "./Setting";

const SideBar = () => {
    const theme = useSelector(getTheme);

  return (
    <Container theme={theme}>
      <UserIcon>
        <AvatarIcon
          size={"large"}
          icon={<UserOutlined />}
        />
      </UserIcon>
      <ChatGroup>
        <ChatItem theme={theme} to={"/ChapApp/Chat/FriendList"}><UnorderedListOutlined /></ChatItem>
        <ChatItem theme={theme} to={"/ChapApp/Chat/Conversations"}><MessageOutlined /></ChatItem>
        <ChatItem theme={theme} to={"/ChapApp/Chat/GroupsChat"}><UsergroupAddOutlined /></ChatItem>
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
