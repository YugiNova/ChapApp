import { Container, Avatar, Name, Email } from "./styles";


const FriendCard = ({friend, theme}) => {


    return(
        <Container theme={theme}>
            <Avatar theme={theme}>
                <img src="https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"/>
            </Avatar>
            <Name theme={theme}>{friend.displayName}</Name>
            <Email theme={theme}>{friend.email}</Email>
        </Container>
    )
}

export default FriendCard;