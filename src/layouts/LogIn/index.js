import { CoverImage, FormContainer, Image, Layout, Title } from "./styles";



const LogIn = ({children}) => {

    return(
        <Layout>
            <CoverImage img={"https://images.unsplash.com/photo-1552068751-34cb5cf055b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"}>
                <Title>Messenger Chat</Title>
            </CoverImage>
            <FormContainer>
                {children}
            </FormContainer>
        </Layout>
    )
}

export default LogIn;