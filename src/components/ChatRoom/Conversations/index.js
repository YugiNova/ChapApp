import { FieldPath, collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getConversationList, getUser } from "../../../redux/selector";
import { db } from "../../../firebase/config";
import { UpdateConversationList } from "../../../redux/action";
import { useEffect } from "react";
import ConversationItem from "./ConversationItem";

const Conversations = () => {
  const user = useSelector(getUser);
  const conversationList = useSelector(getConversationList);
  const dispatch = useDispatch();

  const getConversList = () => {
    let conversList = [];
    const q = query(collection(db, "conversations"), where("id", 'in',user.conversations));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let conversList = [];
      querySnapshot.forEach((doc) => {
        conversList.push({value:doc.data(),id: doc.id});
      });
    //   console.log(conversList);
      dispatch(UpdateConversationList(conversList));
    });
  };

  useEffect(() => {
    getConversList();
  }, []);

  useEffect(() => {
    // console.log(conversationList);
  }, [conversationList]);

  return (
    <div>
      {conversationList.map((item) => {
        return <ConversationItem conversation={item?item:""} user={user} />;
      })}
    </div>
  );
};

export default Conversations;
