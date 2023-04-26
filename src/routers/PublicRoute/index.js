import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/selector";
import { ResetState, UpdateConversation, UpdateConversationList, UpdateUser } from "../../redux/action";
import { useEffect } from "react";


const PublicRoute = ({component}) => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    useEffect(()=> {
        dispatch(UpdateUser({
            uid: "",
            displayName: "",
            email: "",
            imageUrl: "",
            role: "",
            friend_list: []
        }))

        dispatch(UpdateConversationList([]))
        
        dispatch(UpdateConversation({
            id: "",
        users: [],
        message:[]
        }));
    }, [])

    onAuthStateChanged(auth, (currentUser) => {
        console.log(user);
        if(currentUser){
            navigate("/Chat")
        }else{

        }
    })

    return(
        <div>
            {component}
        </div>
    )
}
export default PublicRoute;