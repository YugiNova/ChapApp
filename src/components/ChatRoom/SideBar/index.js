import SignOut from './SignOut';
import { auth, db } from "../../../firebase/config";
import { Link, Outlet } from 'react-router-dom';

const SideBar = () => {

    return(
        <div>
            <SignOut/>
            <div>{auth.currentUser.email}</div>
            <div><Link to={"/Chat/FriendList"}>FriendList</Link></div>
            <div><Link to={"/Chat/Conversations"}>Conversations</Link></div>
            <div><Link to={"/Chat/GroupsChat"}>GroupsChat</Link></div>
        </div>
    )
}

export default SideBar;