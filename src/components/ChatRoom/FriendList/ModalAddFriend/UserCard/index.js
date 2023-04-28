import { UserOutlined } from "@ant-design/icons";
import { AddButton, AvatarIcon, Container, Email, Name } from "./styles";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/config";
import { useSelector } from "react-redux";
import { getUser } from "../../../../../redux/selector";
import { useEffect, useState } from "react";

const UserCard = ({ userData, theme }) => {
  const currentUser = useSelector(getUser);

  const [inviteStatus,setInviteStatus] = useState();

  useEffect(()=> {

  },[])

  const sendInvite = async (selectedUserID) => {
    const userDocRef = doc(db, "users_profile", selectedUserID);

    await updateDoc(userDocRef, {
      recieved_invite: arrayUnion(currentUser.uid),
    });

    await updateDoc(doc(db,"users_profile",currentUser.uid),{
        sended_invite: arrayUnion(selectedUserID),
    })
  };

  return (
    <Container theme={theme}>
      <AvatarIcon size={"large"} theme={theme} icon={<UserOutlined />} />
      <Name theme={theme}>{userData.value.displayName}</Name>
      <Email theme={theme}>{userData.value.email}</Email>
      <AddButton
        onClick={() => {
            if(userData.inviteStatus === "Invite"){
                sendInvite(userData.id);
            }
        }}
        theme={theme}
        status={userData.inviteStatus}
      >
        {userData.inviteStatus}
      </AddButton>
    </Container>
  );
};

export default UserCard;
