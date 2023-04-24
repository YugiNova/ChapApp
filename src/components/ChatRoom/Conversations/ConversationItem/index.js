import { useEffect, useState } from "react";
import {
  Avatar,
  ButtonConversation,
  Container,
  LastMess,
  Title,
} from "./styles";
import { collection, doc, getDoc, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useDispatch } from "react-redux";
import { UpdateConversation } from "../../../../redux/action";
import { queries } from "@testing-library/react";

const ConversationItem = ({ conversation, user }) => {
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  const getFriendName = () => {
    const frienName = conversation.value.users.filter((item) => {
      return item !== user.uid;
    });
    const unsub = onSnapshot(doc(db, "users_profile", frienName[0]), (doc) => {
      console.log("Current data: ", doc.data());
      const data = doc.data();
      setTitle(data.displayName);
    });
  };

  useEffect(() => {
    getFriendName();
  }, []);

  const showConversation = async () => {
    const q = query(
      collection(db, "conversations", conversation.id, "messages")
    );

    let messagesArr = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data().text);
      messagesArr.push(doc.data())
    });

    dispatch(
      UpdateConversation({
        id: conversation.id,
        users: conversation.value.users,
        message: messagesArr
      })
    );
  };

  return (
    <Container>
      <ButtonConversation onClick={showConversation}>
        <Avatar>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Avatar>
        <Title>{title}</Title>
        <LastMess>{conversation.value.lastMessage}</LastMess>
      </ButtonConversation>
    </Container>
  );
};

export default ConversationItem;
