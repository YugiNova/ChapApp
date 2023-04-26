import { MdSunny } from "react-icons/md";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../../redux/selector";

const ThemeToggle = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}><MdSunny/></Container>
    )
}

export default ThemeToggle;