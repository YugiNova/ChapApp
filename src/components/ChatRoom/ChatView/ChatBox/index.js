import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useDispatch } from "react-redux";
import { UpdateConversation } from "../../../../redux/action";
import { useEffect, useRef } from "react";
import MessageBox from "../MessageBox";
import { ChatWrapper, Container } from "./styles";

const ChatBox = ({ conversation }) => {
  const dispatch = useDispatch();
  const endRef = useRef(null);

  //Get real-time messages
  const getRealTimeMessaages = async () => {
    const q = query(
      collection(db, "conversations", conversation.id, "messages"),
      orderBy("createAt")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArr = [];
      querySnapshot.forEach((doc) => {
        messagesArr.push(doc.data());
      });
      console.log(messagesArr);

      dispatch(
        UpdateConversation({
          message: messagesArr,
        })
      );

      endRef.current?.scrollIntoView();
    });

    
  };

  useEffect(() => {
    getRealTimeMessaages();
  }, [conversation.id]);

  return (
    <Container className="messagesBox">
      <ChatWrapper>
      {conversation.message.map((item) => {
        return <MessageBox message={item}/>;
      })}
      <div ref={endRef}></div> 
      </ChatWrapper>
    </Container>
  );
};

export default ChatBox;
