import { useSelector } from "react-redux";
import { getConversation, getTheme, getUser } from "../../../redux/selector";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import { Container } from "./styles";

const ChatView = () => {
  const conversation = useSelector(getConversation);
  const theme = useSelector(getTheme);
  const user = useSelector(getUser);

  //   useEffect(() => {
  //     console.log(conversation);
  //   }, [conversation]);

  return (
    <Container theme={theme}>
      <ChatHeader theme={theme} conversation={conversation} user={user} />
      <ChatBox theme={theme} conversation={conversation} user={user} />
      <ChatInput theme={theme} conversation={conversation} user={user} />
    </Container>
  );
};

export default ChatView;
