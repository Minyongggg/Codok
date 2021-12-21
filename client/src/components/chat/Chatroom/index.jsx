import { React, useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";
import { useInput } from "../../../hooks/useInput";

function Chatroom() {
  const location = useLocation();
  const profilePk = localStorage.getItem("CodokId")
  const friendPk = location.state.friendPk;
  const friendName = location.state.friendName;
  const [chatroomPk, setChatroomPk] = useState();
  const [chats, setChats] = useState([]);
  const [msgInput, setMsgInput] = useState("");
  const ref = useRef();

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

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setMsgInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if((msgInput.replace(/\s|　/gi, '') !== '')){
      sendMsg(profilePk, friendPk, msgInput, chatroomPk);
    }
    setMsgInput('');
    ref.current.focus();
  }

  const sendMsg = async (profilePk, friendPk, msgInput, chatroomPk) => {
    await axios({
      method: "post",
      url: "http://localhost:8000/api/chats/",
      data: { senderPk: profilePk, receiverPk: friendPk, content: msgInput, chatroomPk},
      withCredentials: true,
    })
    .then((res) => {
      const newChats = chats.concat(res.data.chat)
      setChats(newChats); //socket으로 구현하면 빼도 될려나
    });
  }

  useEffect(() => {
    if(!chatroomPk){
      console.log(`${profilePk}와 ${friendPk}의 채팅방`);
      getChatroom(profilePk, friendPk);
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
      <h3>상대 : {friendName}</h3>
      <div>{chats.map((item)=>{
        if(item.senderPk == profilePk){
          return <div class="send">{item.content}</div>
        }
        else{
          return <div class="receive">{item.content}</div>
        }
      })}</div>

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" id="msgInput" onChange={onChange} value={msgInput} ref={ref} required />
          <button type="submit">^</button>
        </form>
      </div>
    </>
  );
}

export default Chatroom;
