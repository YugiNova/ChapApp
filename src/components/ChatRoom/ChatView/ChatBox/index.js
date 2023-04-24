import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useDispatch } from "react-redux";
import { UpdateConversation } from "../../../../redux/action";
import { useEffect } from "react";

const ChatBox = ({ conversation }) => {
    const dispatch = useDispatch();

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
    });
  };

  useEffect(() => {
    getRealTimeMessaages();
  }, [conversation.id]);

  return (
    <div>
      {conversation.message.map((item) => {
        return <h1>{item.text}</h1>;
      })}
    </div>
  );
};

export default ChatBox;
