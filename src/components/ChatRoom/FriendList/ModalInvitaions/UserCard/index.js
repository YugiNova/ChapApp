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
import { useSelector } from "react-redux";
import { getTheme, getUser } from "../../../../../redux/selector";
import { db } from "../../../../../firebase/config";
import { AddButton, AvatarIcon, Container, Email, Name } from "./styles";
import { UserOutlined } from "@ant-design/icons";

const UserCard = ({ userData }) => {
  const user = useSelector(getUser);
  const theme = useSelector(getTheme);

  const onAccept = async (selectedUser, selectedUserID) => {
    const userDocRef = doc(db, "users_profile", user.uid);
    const userInviteDocRef = doc(db, "users_profile", selectedUserID);

    //create a new conversation
    const conversationRef = await addDoc(collection(db, "conversations"), {
      title: "",
      users: [selectedUserID, user.uid],
      lastMessage: "",
    });

    //add field id to conversation doc
    await updateDoc(conversationRef, {
      id: conversationRef.id,
    });

    //create first welcome message to conversation
    const messagesRef = doc(
      collection(db, "conversations", conversationRef.id, "messages")
    );
    await setDoc(messagesRef, {
      id: messagesRef.id,
      text: "Hello ! Nice to meet you !",
      createAt: serverTimestamp(),
    });

    //user recieve invitation:
    //add send invite user to friend list
    //delete recieve invitation in box
    //add conversation just create into conversationlist
    await updateDoc(userDocRef, {
      friend_list: arrayUnion(selectedUser.email),
      recieved_invite: arrayRemove(selectedUserID),
      conversations: arrayUnion(conversationRef.id),
    });

    //user send invitation:
    //add send invite user to friend list
    //delete sended invitation in box
    //add conversation just create into conversationlist
    await updateDoc(userInviteDocRef, {
      friend_list: arrayUnion(user.email),
      sended_invite: arrayRemove(user.uid),
      conversations: arrayUnion(conversationRef.id),
    });
    console.log(selectedUser + " | " + selectedUserID);
  };

  return (
    <Container theme={theme}>
      <AvatarIcon size={"large"} theme={theme} icon={<UserOutlined />} />
      <Name theme={theme}>{userData.value.displayName}</Name>
      <Email theme={theme}>{userData.value.email}</Email>
      <AddButton
        onClick={() => {
          onAccept(userData.value, userData.id);
        }}
        theme={theme}
        status={userData.inviteStatus}
      >
        Accept
      </AddButton>
    </Container>
  );
};

export default UserCard;
