import { Button, Input } from "antd";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../firebase/config";

const ChatInput = ({ conversation, user }) => {
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

    setMess("");
  };

  return (
    <div>
      <Input onChange={onChange} value={mess} />
      <Button onClick={onSend}>Send</Button>
    </div>
  );
};

export default ChatInput;
