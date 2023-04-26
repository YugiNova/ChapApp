import { useEffect, useState } from "react"
import { db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import { AvatarIcon, Container, Name, Status } from "./styles"


const ChatHeader = ({conversation, user, theme}) => {
    const [friendName, setFriendName] = useState()
    
    const getFriendName = async () => {
        const friendId =  conversation.users.filter(item => {
            return item !== user.uid
        })

        const friendSnap = await getDoc(doc(db,"users_profile",friendId[0]))
        console.log(friendSnap);
        setFriendName(friendSnap.data().displayName)
    }

    useEffect(()=> {
        getFriendName()
    },[conversation.id])

    return(
        <Container theme={theme}>
            <AvatarIcon size={"large"} src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
            <Name  theme={theme}>{friendName}</Name>
            <Status  theme={theme}>Active now</Status>
        </Container>
    )
}

export default ChatHeader;