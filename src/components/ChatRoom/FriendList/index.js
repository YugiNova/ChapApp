import { useSelector } from "react-redux";
import {
  Container,
  Header,
  OptionButton,
  Options,
  SearchBar,
  Title,
  List,
  FriendCount,
  ButtonWrapper,
} from "./styles";
import { getTheme, getUser } from "../../../redux/selector";
import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import FriendCard from "./FriendCard";
import { Badge, Button } from "antd";
import ModalAddFriend from "./ModalAddFriend";
import ModalInvitation from "./ModalInvitaions";
import { SearchOutlined } from "@ant-design/icons";
import { MdNotificationsActive, MdPersonAddAlt1 } from "react-icons/md";

const FriendList = () => {
  const [openAddFriendModal, setOpenAddFriendModal] = useState(false);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [inviteCount, setInviteCount] = useState(0);
  const user = useSelector(getUser);
  const [friendList, setFriendList] = useState([]);
  const userProfileRef = collection(db, "users_profile");
  const theme = useSelector(getTheme);
  const [keyword, setKeyword] = useState("")

  const getFriendsName = async () => {
    const q = query(userProfileRef, where("email", "in", user.friend_list));
    const querySnapshot = await getDocs(q);
    let friendArr = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      friendArr.push(data);
    });
    setFriendList(friendArr);
  };

  useEffect(() => {
    if(user.recieved_invite){
      getFriendsName();
      setInviteCount(user.recieved_invite.length);
    }
  }, [user]);

  //search handle
  const SearchFriendList =  useMemo(()=>{
    if(keyword !== "" && friendList.length > 0){
      const newFriendList = friendList.filter(item => {
        return item.displayName.includes(keyword)
      })
      return newFriendList
    }
    else{
      return friendList
    }
  },[keyword,friendList])

  const onAddFriend = () => {
    setOpenAddFriendModal(true);
  };

  const onInvitationCheck = () => {
    setOpenInvitation(true);
  };

  const onSearch = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>Friends List</Title>
        <SearchBar onChange={onSearch} theme={theme} suffix={<SearchOutlined />} />
      </Header>

      <Options theme={theme}>
        <FriendCount theme={theme}>{user.friend_list.length} friends</FriendCount>
        <ButtonWrapper>
          <OptionButton theme={theme} onClick={onAddFriend}>
            <MdPersonAddAlt1 />
          </OptionButton>
          <Badge count={inviteCount}>
            <OptionButton theme={theme} onClick={onInvitationCheck}>
              <MdNotificationsActive />
            </OptionButton>
          </Badge>
        </ButtonWrapper>
      </Options>

      <ModalAddFriend
        open={openAddFriendModal}
        setOpen={setOpenAddFriendModal}
      />
      <ModalInvitation
        open={openInvitation}
        setOpen={setOpenInvitation}
        user={user}
        userProfileRef={userProfileRef}
      />

      <List theme={theme}>
        {SearchFriendList.map((item) => {
          return <FriendCard friend={item} theme={theme} />;
        })}
      </List>
    </Container>
  );
};

export default FriendList;
