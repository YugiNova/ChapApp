import { Button, Form, message } from "antd";
import { ButtonShowPassword, Container, FormContainer, InputBox, InputField, InputPasswordField, Placeholder, Register, ShowEye, SubmitButton, Title } from "./styles";
import { useEffect, useState } from "react";
import {EyeOutlined,EyeInvisibleOutlined} from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState("password");
  const [showPasswordIcon, setShowPasswordIcon] = useState(<EyeOutlined />);
  const navigate = useNavigate()

  const TogglePassword = () => {
    if(showPassword === "password"){
      setShowPassword("text")
      setShowPasswordIcon(<EyeInvisibleOutlined />)
    }
    else{
      setShowPassword("password")
      setShowPasswordIcon(<EyeOutlined />)
    } 
  }

  const HandleSignIn = async () => {
    const data = await form.validateFields();
    try{
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      navigate("/ChapApp/Chat/FriendList");
    } catch (errorRes)  {
        switch(errorRes.code){
          case "auth/user-not-found":
            messageApi.open({
              type: 'error',
              content: "Email not found !",
            });
            break;
          case "auth/wrong-password":
            messageApi.open({
              type: 'error',
              content: "Password is incorrect !",
            });
            break;
          default:
            break;
        }
      console.log(errorRes.code);
    }
  }


  return (
    <Container>
      {contextHolder}
      <Title>Welcome</Title>
      <FormContainer form={form} layout="vertical">
        <InputBox
          name="email"
          rules={[{ required: true, message: "Email is required" }]}
        >
          <InputField margin={"0"} placeholder=" " suffix={"Name"}/>
          
        </InputBox>
        <InputBox
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <InputField margin={"1.5rem"} type={showPassword} placeholder=" " suffix={"Password"} prefix={<ButtonShowPassword onClick={TogglePassword}>{showPasswordIcon}</ButtonShowPassword>}/>
        </InputBox>
      </FormContainer>
      <SubmitButton onClick={HandleSignIn}>Sign In</SubmitButton>
      <Register>You don't have account? <Link to="/ChapApp/SignUp">Register</Link></Register>
    </Container>
  );
};

export default SignIn;
