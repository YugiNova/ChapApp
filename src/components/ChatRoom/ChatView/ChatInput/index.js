import { SendOutlined } from "@ant-design/icons";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../firebase/config";
import { ButtonSend, Container, InputChat } from "./styles";

const ChatInput = ({ conversation, user, theme }) => {
  const [mess, setMess] = useState();
  //Send Message
  const onChange = (e) => {
    setMess(e.target.value);
  };

  const onSend = async () => {
    const senddingMessRef = await addDoc(
      collection(db, "conversations", conversation.id, "messages"),
      {
        sendUserId: user.uid,
        text: mess,
        createAt: serverTimestamp(),
      }
    );

    await updateDoc(doc(db,"conversations",conversation.id),{
      lastMessage: mess
    })

    setMess("");
  };

  return (
    <Container theme={theme}>
      <InputChat  theme={theme} onChange={onChange} value={mess} />
      <ButtonSend  theme={theme} onClick={onSend}><SendOutlined /></ButtonSend>
    </Container>
  );
};

export default ChatInput;
