import { Button, Modal } from "antd";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useState } from "react";
import { useEffect } from "react";
import FriendCard from "../FriendCard";
import { List, ModalCustom, Title } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../../redux/selector";
import UserCard from "./UserCard";

const ModalInvitation = ({ open, setOpen, user, userProfileRef }) => {
  const [inviteList, setInviteList] = useState([]);
  const theme = useSelector(getTheme);

  const onCancel = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    setOpen(false);
  };

  const getInvitation = async () => {
    let inviteArr = [];
    for (let i = 0; i < user.recieved_invite.length; i++) {
      const docSnap = await getDoc(
        doc(db, "users_profile", user.recieved_invite[i])
      );
      inviteArr.push({ value: docSnap.data(), id: user.recieved_invite[i] });
      console.log(docSnap.data());
    }

    setInviteList(inviteArr);
  };

  useEffect(() => {
    if (user.recieved_invite) {
      getInvitation();
      console.log(inviteList);
    }
  }, [user.recieved_invite]);

  return (
    <ModalCustom theme={theme} open={open} onCancel={onCancel} onOk={onSubmit}>
      <Title theme={theme}>Invitations</Title>
      <List>
        {inviteList.map((item) => {
          return <UserCard userData={item} />;
        })}
      </List>
    </ModalCustom>
  );
};
export default ModalInvitation;
