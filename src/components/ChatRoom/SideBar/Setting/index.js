import { MdSettings } from "react-icons/md";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../../redux/selector";


const SettingButton = () => {
    const theme = useSelector(getTheme);

    return(
        <Container theme={theme}><MdSettings/></Container>
    )
}

export default SettingButton;