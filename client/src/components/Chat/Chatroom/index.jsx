import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import io from "socket.io-client"
import config from "../../../config/config";

const socket = io.connect(config.BASE_URL);

function Chatroom() {
  const location = useLocation();
  const profilePk = localStorage.getItem("CodokId")
  const friendPk = location.state.friendPk;
  const friendName = location.state.friendName;
  const [chatroomPk, setChatroomPk] = useState();
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState(null);
  const [msgInput, setMsgInput] = useState("");
  const ref = useRef();

  const getChats = async (chatroomPk) => {
    await axios({
      method: "get",
      url: config.BASE_URL + "/api/chats/chatroom/" + chatroomPk,
      withCredentials: true
    })
    .then((res) => {
      return setChats(() => res.data.chats);
    })
  }

  const getChatroom = async (profilePk, friendPk) => {
    await axios({
      method: "post",
      url: config.BASE_URL + "/api/chatrooms/",
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
    const newChat = { senderPk: profilePk, receiverPk: friendPk, content: msgInput, createdAt: Date.now(), chatroomPk};

    await axios({
      method: "post",
      url: config.BASE_URL + "/api/chats/",
      data: newChat,
      withCredentials: true,
    })
    .then((res) => {
      if(res.data.chat){
        socket.emit('sendMsg', { chatroomPk, newChat });
      }
    });
  }

  useEffect(()=>{
    socket.off('newMsg');
    socket.on('newMsg', (newChat) => {
      setNewChat(newChat);
    })
  }, []);

  useEffect(()=>{
    if(newChat){
      setChats([...chats, newChat]);
    }
  }, [newChat]);

  useEffect(() => {
    if(!chatroomPk){
      getChatroom(profilePk, friendPk);
    }
    if(chatroomPk){
      socket.emit('joinroom', chatroomPk)
      getChats(chatroomPk);
    }
  }, [chatroomPk]);


  return (
    <>
      <h3>상대 : {friendName}</h3>
      <div>{chats.map((item, i)=>{
        if(item.senderPk == profilePk){
          return <div className="send" key={i}>{item.content}</div>
        }
        else{
          return <div className="receive" key={i}>{item.content}</div>
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
