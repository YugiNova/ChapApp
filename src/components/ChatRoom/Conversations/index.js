import {
  FieldPath,
  collection,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversationList,
  getTheme,
  getUser,
} from "../../../redux/selector";
import { db } from "../../../firebase/config";
import { UpdateConversationList } from "../../../redux/action";
import { useEffect } from "react";
import ConversationItem from "./ConversationItem";
import { Container, Header, List, SearchBar, Title } from "./styles";
import { SearchOutlined } from "@ant-design/icons";

const Conversations = () => {
  const user = useSelector(getUser);
  const conversationList = useSelector(getConversationList);
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const getConversList = () => {
    let conversList = [];

    if (user.conversations.length !== 0) {
      const q = query(
        collection(db, "conversations"),
        where("id", "in", user.conversations)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let conversList = [];
        querySnapshot.forEach((doc) => {
          conversList.push({ value: doc.data(), id: doc.id });
        });
        //   console.log(conversList);
        dispatch(UpdateConversationList(conversList));
      });
    }
  };

  useEffect(() => {
    if(user.conversations){
      getConversList();
    }
  }, []);

  useEffect(() => {
    // console.log(conversationList);
  }, [conversationList]);

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>Chats</Title>
        <SearchBar theme={theme} suffix={<SearchOutlined />} />
      </Header>
      <List theme={theme}>
        {conversationList === []? "": conversationList.map((item) => {
          return <ConversationItem theme={theme} conversation={item?item:[]} user={user} />;
        })}
      </List>
    </Container>
  );
};

export default Conversations;
