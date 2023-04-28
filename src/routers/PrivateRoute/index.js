import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../../redux/action";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const PrivateRoute = ({component}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const updateUserState = async (uid, currentUser) => {
        // const docSnap = await getDoc(doc(db,"users_profile",uid))
        // const userProfile = docSnap.data();

        const unsub = onSnapshot(doc(db,"users_profile",uid), (doc) => {
            // console.log("Current data: ", doc.data());
            const userProfile = doc.data();
            dispatch(UpdateUser({
                uid: currentUser.uid,
                displayName: userProfile.displayName,
                email: currentUser.email,
                imageUrl: "",
                role: userProfile.role,
                friend_list: userProfile.friend_list,
                recieved_invite: userProfile.recieved_invite,
                sended_invite:userProfile.sended_invite,
                conversations: userProfile.conversations
            }))
        });
    }

    onAuthStateChanged(auth, (currentUser) => {
        // console.log(currentUser.email + "signed in");
        updateUserState(currentUser.uid, currentUser)

        if(currentUser === null){
            updateUserState(currentUser.uid, currentUser);
            navigate("/ChapApp/");
        }
    })

    return(
        <div>
            {component}
        </div>
    )
}
export default PrivateRoute;