import { Button, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import FriendCard from "../FriendCard";
import { db } from "../../../../firebase/config";
import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { getUser } from "../../../../redux/selector";

const ModalAddFriend = ({ open, setOpen }) => {
  const [keyword, setKeyword] = useState("");
  const [userList, setUserList] = useState([]);
  const userProfileRef = collection(db, "users_profile");
  const currentUser = useSelector(getUser);

  const onCancel = () => {
    setKeyword("");
    setOpen(false);
  };

  const onSubmit = () => {
    setKeyword("");
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const getUserList = async (keyword) => {
    const q = query(userProfileRef, where("displayName", "==", keyword));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    let userArr = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const dataId = doc.id;
      userArr.push({value: data, id: dataId});
    });
    setUserList(userArr);
  };

  const onSearch = () => {
    // if(keyword){
    //     getUserList(keyword)
    // }
  };

  useEffect(() => {
    if (keyword) {
      getUserList(keyword);
    } else if (keyword == "") {
      setUserList([]);
    }
  }, [keyword]);

  const sendInvite = async (selectedUserID) => {
    const userDocRef = doc(db, "users_profile", selectedUserID);

    await updateDoc(userDocRef, {
        recieved_invite: arrayUnion(currentUser.uid),
    });
  }

  return (
    <Modal open={open} onCancel={onCancel} onOk={onSubmit}>
      <Input
        onChange={onChange}
        value={keyword}
        placeholder="Type user name here...."
      />
      {/* <Button onClick={onSearch}>Search</Button> */}
      {userList.map((item) => {
        return (
          <div>
            <FriendCard friend={item.value} />
            <Button onClick={() => {sendInvite(item.id)}}>Add Friend</Button>
          </div>
        );
      })}
    </Modal>
  );
};

export default ModalAddFriend;
