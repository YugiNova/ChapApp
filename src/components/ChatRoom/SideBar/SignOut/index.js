import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase/config";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { Button } from "antd";
import { getTheme, getUser } from "../../../../redux/selector";
import { MdLogout } from "react-icons/md";
import { Container } from "./styles";


const SignOut = () => {
    const navigate = useNavigate();
    const user = useSelector(getUser);
    const theme = useSelector(getTheme)

    const SignOut = async () => {
        await signOut(auth)
        navigate("/");
    }

    useEffect(()=>{
        console.log(user);
    },[user])


    return(
        <Container theme={theme} onClick={SignOut}><MdLogout /></Container>
    )
}
export default SignOut;