import { useEffect, useState } from "react"
import { db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore"


const ChatHeader = ({conversation, user}) => {
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
        <div>
            <h3>{friendName}</h3>
        </div>
    )
}

export default ChatHeader;