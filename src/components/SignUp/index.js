import { Form, Input } from "antd";
import {
  ButtonShowPassword,
  Container,
  FormContainer,
  InputBox,
  InputField,
  Register,
  SubmitButton,
  Title,
} from "./styles";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState("password");
  const [showPasswordIcon, setShowPasswordIcon] = useState(<EyeOutlined />);

  const TogglePassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
      setShowPasswordIcon(<EyeInvisibleOutlined />);
    } else {
      setShowPassword("password");
      setShowPasswordIcon(<EyeOutlined />);
    }
  };

 const currUser = auth.currentUser;

  const createUser = async (data, userid) => {
    await setDoc(doc(db,"users_profile",userid), {
      displayName: data.username,
      email: data.email,
      friend_list: [],
      imageUrl: "",
      role: "user"
    })
  }

  const HandleSignUp = async () => {
    const data = await form.validateFields();
    try{
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      createUser(data,auth.currentUser.uid)
    } catch (error)  {
      console.log(error.message);
    }
    
  };

  return (
    <Container>
      <Title>Registration</Title>
      <FormContainer form={form} layout="vertical">
        <InputBox
          name="username"
          rules={[{ required: true, message: "User name is required" }]}
        >
          <InputField margin={"0"} placeholder=" " suffix={"User name"} />
        </InputBox>
        <InputBox
          name="email"
          rules={[{ required: true, message: "Email is required" },{type: "email", message: "Email is not correct format"}]}
        >
          <InputField margin={"0"} placeholder=" " suffix={"Email"} />
        </InputBox>
        <InputBox
          name="password"
          rules={[{ required: true, message: "Password is required" },{min: 6, message: "Password is minimun 6 character"}]}
        >
          <InputField
            margin={"1.5rem"}
            type={showPassword}
            placeholder=" "
            suffix={"Password"}
            prefix={
              <ButtonShowPassword onClick={TogglePassword}>
                {showPasswordIcon}
              </ButtonShowPassword>
            }
          />
        </InputBox>
        <InputBox
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <InputField
            margin={"1.5rem"}
            type={showPassword}
            placeholder=" "
            suffix={"Confirm Password"}
          />
        </InputBox>
      </FormContainer>
      <SubmitButton onClick={HandleSignUp}>Sign Up</SubmitButton>
      <Register>
        Already have account? <Link to="/ChapApp">Sign in</Link>
      </Register>
    </Container>
  );
};

export default SignUp;
