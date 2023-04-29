import { SendOutlined } from "@ant-design/icons";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../firebase/config";
import {
  ButtonSend,
  Container,
  EmojiButton,
  EmojiPickerContainer,
  InputChat,
} from "./styles";
import EmojiPicker from "emoji-picker-react";
import { MdFace } from "react-icons/md";

const ChatInput = ({ conversation, user, theme }) => {
  const [mess, setMess] = useState("");
  const [showEmoji, setShowEmoji] = useState("none");
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

    await updateDoc(doc(db, "conversations", conversation.id), {
      lastMessage: mess,
    });

    setMess("");
  };

  const toggleEmoji = () => {
    if (showEmoji === "none") {
      setShowEmoji("block");
    } else setShowEmoji("none");
  };

  return (
    <Container theme={theme}>
      <EmojiPickerContainer display={showEmoji}>
        <EmojiPicker 
          theme={theme.status}
          emojiStyle="twitter"
          onEmojiClick={(e) => {
            const newMess = mess + e.emoji;
            setMess(newMess)
          }}
        />
      </EmojiPickerContainer>
      <EmojiButton onClick={toggleEmoji} theme={theme}>
        <MdFace />
      </EmojiButton>
      <InputChat
        theme={theme}
        onChange={onChange}
        value={mess}
        placeholder="Type your mess..."
      />
      <ButtonSend theme={theme} onClick={onSend}>
        <SendOutlined />
      </ButtonSend>
    </Container>
  );
};

export default ChatInput;
