import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase/config";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { Button } from "antd";
import { getUser } from "../../../../redux/selector";


const SignOut = () => {
    const navigate = useNavigate();
    const user = useSelector(getUser)

    const SignOut = async () => {
        await signOut(auth)
        navigate("/");
    }

    useEffect(()=>{
        console.log(user);
    },[user])


    return(
        <Button onClick={SignOut}>Sign Out</Button>
    )
}
export default SignOut;