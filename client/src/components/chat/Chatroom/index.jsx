import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";

function Chatroom() {
  const location = useLocation();
  const profile = useRecoilValue(profileState);
  const friendPk = location.state.friendPk;
  const [chatroomPk, setChatroomPk] = useState();
  const [chats, setChats] = useState([]);

  const getChats = async (chatroomPk) => {
    await axios({
      method: "get",
      url: `http://localhost:8000/api/chats/${chatroomPk}`,
      withCredentials: true
    })
    .then((res) => {
      return setChats(() => res.data.chats);
    })
  }

  const getChatroom = async (profilePk, friendPk) => {
    await axios({
      method: "post",
      url: 'http://localhost:8000/api/chatroom',
      data: { profilePk: profilePk, friendPk },
      withCredentials: true,
    })
    .then((res) => {
      return setChatroomPk(()=>res.data.chatroom.pk);
    })
  }

  useEffect(() => {
    if(!chatroomPk){
      console.log(`${profile.pk}와 ${friendPk}의 채팅방`);
      getChatroom(profile.pk, friendPk);
    }
    if(chatroomPk){
      console.log(chatroomPk)
      getChats(chatroomPk);
    }
  }, [chatroomPk]);

  useEffect(() => {
    if(chats.length){
      console.log(chats)
    }
  }, [chats]);


  return (
    <>
      <h3>채팅방입니다.</h3>
      <div>top bar</div>
      <div>chat container</div>
      <div>chat input</div>
    </>
  );
}

export default Chatroom;
