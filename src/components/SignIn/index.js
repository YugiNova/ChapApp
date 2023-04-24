import { Button, Form } from "antd";
import { ButtonShowPassword, Container, FormContainer, InputBox, InputField, InputPasswordField, Placeholder, Register, ShowEye, SubmitButton, Title } from "./styles";
import { useEffect, useState } from "react";
import {EyeOutlined,EyeInvisibleOutlined} from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
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
      navigate("/Chat");
    } catch (error)  {
      console.log(error.message);
    }
  }


  return (
    <Container>
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
      <Register>You don't have account? <Link to="/SignUp">Register</Link></Register>
    </Container>
  );
};

export default SignIn;
