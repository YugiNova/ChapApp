import { useSelector } from "react-redux";
import { getConversation, getUser } from "../../../redux/selector";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";

const ChatView = () => {
  const conversation = useSelector(getConversation);

  const user = useSelector(getUser);

  //   useEffect(() => {
  //     console.log(conversation);
  //   }, [conversation]);

  return (
    <div>
      <ChatHeader conversation={conversation} user={user} />
      <ChatBox conversation={conversation} user={user} />
      <ChatInput conversation={conversation} user={user} />
    </div>
  );
};

export default ChatView;
