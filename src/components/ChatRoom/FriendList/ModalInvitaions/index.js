import { Button, Modal } from "antd"
import { addDoc, arrayRemove, arrayUnion, collection, doc, getDoc, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useState } from "react";
import { useEffect } from "react";
import FriendCard from "../FriendCard";



const ModalInvitation = ({open, setOpen, user,userProfileRef}) => {
    const [inviteList,setInviteList] = useState([]);

    const onCancel = () => {
        setOpen(false);
    }

    const onSubmit = () => {
        setOpen(false);
    }

    const getInvitation = async () => {
        let inviteArr = [];
        
        for(let i = 0; i< user.recieved_invite.length;i++){
            const docSnap = await getDoc(doc(db,"users_profile",user.recieved_invite[i]))
            inviteArr.push({value: docSnap.data(), id: user.recieved_invite[i]})
            console.log(docSnap.data());
        }
        
        setInviteList(inviteArr);
    }

    useEffect(()=> {
        getInvitation()
        console.log(inviteList);
    },[user])

    const onAccept = async (selectedUser,selectedUserID) => {
        const userDocRef = doc(db, "users_profile", user.uid);
        const userInviteDocRef = doc(db, "users_profile", selectedUserID);

        const conversationRef = await addDoc(collection(db,"conversations"),{
            title: "",
            users: [selectedUserID,user.uid],
            lastMessage: ""
        })

        await updateDoc(conversationRef,{
            id: conversationRef.id
        })

        const messagesRef = doc(collection(db, "conversations", conversationRef.id, "messages"))
        await setDoc(messagesRef,{
            id: messagesRef.id,
            text: "welcome",
            createAt: serverTimestamp()
        })
    
        await updateDoc(userDocRef, {
            friend_list: arrayUnion(selectedUser.email),
            recieved_invite: arrayRemove(selectedUserID),
            conversations: arrayUnion(conversationRef.id)
        });

        await updateDoc(userInviteDocRef,{
            friend_list: arrayUnion(user.email),
            conversations: arrayUnion(conversationRef.id)
        })
        console.log(selectedUser + " | "  +selectedUserID);

    }

    return(
        <Modal open={open} onCancel={onCancel} onOk={onSubmit}>
            {
                inviteList.map(item => {
                    return(
                        <div>
                            <FriendCard friend={item.value}/>
                            <Button onClick={() => {onAccept(item.value, item.id)}}>Accept</Button>
                        </div>
                    )
                })
            }
        </Modal>
    )
}
export default ModalInvitation;