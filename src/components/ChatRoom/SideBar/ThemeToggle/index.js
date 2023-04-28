import { MdBedtime, MdSunny } from "react-icons/md";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "../../../../redux/selector";
import { UpdateTheme } from "../../../../redux/action";
import { useState } from "react";

const ThemeToggle = () => {
    const theme = useSelector(getTheme)
    const dispatch = useDispatch();
    const [themeIcon,setThemeIcon] = useState(<MdSunny/>);
    
    const lightTheme = {
        status: "light",
        primaryColor: "#7269ef",
        sidebarBg: "#f5f7fb",
        listBg: "#ffffff",
        chatBg: "#f5f7fb",
        primaryFont: "#212529",
        secondaryFont: "#7a7fb0",
        listItemActive: "#e6ebf5",
        sidebarItemActive: "#e6ebf5",
    }

    const darkTheme = {
        status: "dark",
        primaryColor: "#7269ef",
        sidebarBg: "#36404a",
        listBg: "#303841",
        chatBg: "#262e35",
        primaryFont: "white",
        secondaryFont: "#a6b0cf",
        listItemActive: "#36404a",
        sidebarItemActive: "#262e35",
    }

    const onChangeTheme = () => {
        if(theme.status === "dark"){
            dispatch(UpdateTheme(lightTheme))
            setThemeIcon(<MdBedtime/>)
        }
        else{
            dispatch(UpdateTheme(darkTheme))
            setThemeIcon(<MdSunny/>)
        } 
        
    }

    return(
        <Container onClick={onChangeTheme} theme={theme}>{themeIcon}</Container>
    )
}

export default ThemeToggle;