import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selector";
import { Container, Header, List, SearchBar, Title } from "./styles";
import { SearchOutlined } from "@ant-design/icons";

const GroupsChat = () => {
const theme = useSelector(getTheme);

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>Groups</Title>
        <SearchBar theme={theme} suffix={<SearchOutlined />} />
      </Header>
      <List theme={theme}>
            Coming soon...
      </List>
    </Container>
  );
};

export default GroupsChat;
