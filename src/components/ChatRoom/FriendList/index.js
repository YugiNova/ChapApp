import { useSelector } from "react-redux";
import { Container } from "./styles";
import { getUser } from "../../../redux/selector";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import FriendCard from "./FriendCard";
import { Badge, Button } from "antd";
import ModalAddFriend from "./ModalAddFriend";
import ModalInvitation from "./ModalInvitaions";

const FriendList = () => {
    const [openAddFriendModal,setOpenAddFriendModal] = useState(false);
    const [openInvitation, setOpenInvitation] = useState(false);
    const [inviteCount, setInviteCount] = useState(0);
  const user = useSelector(getUser);
  const [friendList, setFriendList] = useState([]);
  const userProfileRef = collection(db, "users_profile");
  

  const getFriendsName = async () => {
    const q = query(userProfileRef, where("email", "in", user.friend_list));
    const querySnapshot = await getDocs(q);
    let friendArr = []
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      friendArr.push(data);
    });
    setFriendList(friendArr)
  };

  useEffect(() => {
    getFriendsName();
    setInviteCount(user.recieved_invite.length)
  }, [user]);

  const onAddFriend = () => {
    setOpenAddFriendModal(true)
  }

  const onInvitationCheck= () => {
    setOpenInvitation(true)
  }

  return (
    <Container>
        <Button onClick={onAddFriend}>Add Friend</Button>
        <Badge count={inviteCount}>
            <Button onClick={onInvitationCheck}>Invitation</Button>
        </Badge>
        <ModalAddFriend open={openAddFriendModal} setOpen={setOpenAddFriendModal}/>
        <ModalInvitation open={openInvitation} setOpen={setOpenInvitation} user={user} userProfileRef={userProfileRef}/>
      {friendList.map((item) => {
        return <FriendCard friend={item}/>
      })}
    </Container>
  );
};

export default FriendList;
