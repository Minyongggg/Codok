import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import io from "socket.io-client";
import Header from "../../../components/common/Header";
import config from "../../../config/config";
import * as S from "./style";
import { ReactComponent as SendSVG } from "../../../assets/icon/send-button.svg";
import dayjs from "dayjs";
const socket = io.connect(config.BASE_URL);

function Chatroom() {
  const location = useLocation();
  const profilePk = localStorage.getItem("CodokId");
  const friendPk = location.state.friendPk;
  const friendName = location.state.friendName;
  const [chatroomPk, setChatroomPk] = useState();
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState(null);
  const [msgInput, setMsgInput] = useState("");
  const ref = useRef();
  const messageBoxRef = useRef(null);

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  const getChats = async (chatroomPk) => {
    await axios({
      method: "get",
      url: config.BASE_URL + "/api/chats/chatroom/" + chatroomPk,
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      return setChats(() => res.data.chats);
    });
  };

  const getChatroom = async (profilePk, friendPk) => {
    await axios({
      method: "post",
      url: config.BASE_URL + "/api/chatrooms/",
      data: { profilePk: profilePk, friendPk },
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      return setChatroomPk(() => res.data.chatroom.pk);
    });
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setMsgInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (msgInput.replace(/\s|　/gi, "") !== "") {
      sendMsg(profilePk, friendPk, msgInput, chatroomPk);
    }
    setMsgInput("");
    ref.current.focus();
  };

  const sendMsg = async (profilePk, friendPk, msgInput, chatroomPk) => {
    const newChat = {
      senderPk: profilePk,
      receiverPk: friendPk,
      content: msgInput,
      createdAt: Date.now(),
      chatroomPk,
    };

    await axios({
      method: "post",
      url: config.BASE_URL + "/api/chats/",
      data: newChat,
      withCredentials: true,
    }).then((res) => {
      if (res.data.chat) {
        socket.emit("sendMsg", { chatroomPk, newChat });
      }
    });
  };

  useEffect(() => {
    socket.off("newMsg");
    socket.on("newMsg", (newChat) => {
      setNewChat(newChat);
      console.log(newChat);
    });
  }, []);

  useEffect(() => {
    if (newChat) {
      setChats([...chats, newChat]);
    }
  }, [newChat]);

  useEffect(() => {
    if (!chatroomPk) {
      console.log(`${profilePk}와 ${friendPk}의 채팅방`);
      getChatroom(profilePk, friendPk);
    }
    if (chatroomPk) {
      socket.emit("joinroom", chatroomPk);
      getChats(chatroomPk);
    }
  }, [chatroomPk]);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <>
      <Header type="chat" content={friendName} />
      <S.Container ref={messageBoxRef}>
        {chats.map((item, i) => {
          if (item.senderPk == profilePk) {
            return (
              <S.SendWrapper>
                <S.CreatedAt>
                  {" "}
                  {dayjs(item.createdAt).format("HH:mm A")}
                </S.CreatedAt>
                <S.Send className="send" key={i}>
                  {item.content}
                </S.Send>
              </S.SendWrapper>
            );
          } else {
            return (
              <S.ReceiverWrapper>
                <S.Receive className="receive" key={i}>
                  {item.content}
                </S.Receive>
                <S.CreatedAt>
                  {dayjs(item.createdAt).format("HH:mm A")}
                </S.CreatedAt>
              </S.ReceiverWrapper>
            );
          }
        })}
      </S.Container>

      <S.InputWrapper>
        <S.InputBox>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="msgInput"
              onChange={onChange}
              value={msgInput}
              ref={ref}
              required
              placeholder="친구에게 코talk을 보내세요"
            />
            <button type="submit">
              <SendSVG style={{cursor:"pointer"}} />
            </button>
          </form>
        </S.InputBox>
      </S.InputWrapper>
    </>
  );
}

export default Chatroom;
