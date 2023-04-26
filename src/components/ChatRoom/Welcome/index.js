import { useSelector } from "react-redux";
import { Container, Title } from "./styles";
import { getTheme } from "../../../redux/selector";


const Welcome = () => {
    const theme = useSelector(getTheme);

    return(
        <Container theme={theme}>
            <Title theme={theme}>Welcome to Chat App !</Title>
        </Container>
    )
}

export default Welcome;