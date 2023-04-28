import { Button, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import FriendCard from "../FriendCard";
import { db } from "../../../../firebase/config";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { getTheme, getUser } from "../../../../redux/selector";
import UserCard from "./UserCard";
import { Container, List, ModalCustom, SearchBar, Title } from "./styles";
import { SearchOutlined } from "@ant-design/icons";

const ModalAddFriend = ({ open, setOpen }) => {
  const [keyword, setKeyword] = useState("");
  const [userList, setUserList] = useState([]);
  const userProfileRef = collection(db, "users_profile");
  const currentUser = useSelector(getUser);
  const theme = useSelector(getTheme);

  const onCancel = () => {
    setKeyword("");
    setOpen(false);
  };

  const onSubmit = () => {
    setKeyword("");
    setOpen(false);
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const getUserList = async (keyword) => {
    const q = query(userProfileRef, where("displayName", ">=", keyword));
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    let userArr = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const dataId = doc.id;
      let invite = "";
      if(currentUser.friend_list.includes(data.email)){
        invite = "Friended";
      }
      else if(currentUser.sended_invite.includes(dataId)){
        invite = "Invited";
      }
      else if(currentUser.recieved_invite.includes(dataId)){
        invite = "Recieved";
      }
      else if(dataId === currentUser.uid){
        invite = "You !";
      }
      else{
        invite = "Invite";
      }
      userArr.push({ value: data, id: dataId,inviteStatus: invite});
    });
    // console.log(userArr);
    setUserList(userArr);
  };

  useEffect(() => {
    if (keyword) {
      getUserList(keyword);
    } else if (keyword == "") {
      setUserList([]);
    }
  }, [keyword]);

  return (
    <ModalCustom theme={theme} open={open} onCancel={onCancel} onOk={onSubmit}>
      <Container  theme={theme}>
        <Title theme={theme}>Add friends</Title>
        <SearchBar
          onChange={onChange}
          value={keyword}
          placeholder="Type user name here...."
          suffix={<SearchOutlined />}
          theme={theme}
        />
        <List theme={theme}>
          {userList.map((item) => {
            return (
                <UserCard theme={theme} userData={item} />
            );
          })}
        </List>
      </Container>
    </ModalCustom>
  );
};

export default ModalAddFriend;
