import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Chatbar from "./Chatbar/index";

function Chatlist() {
  const profilePk = localStorage.getItem("CodokId")
  const [isLoading, setIsLoading] = useState(true);
  const [chatroomList, setChatroomList] = useState([]);


  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/chatrooms/${profilePk}`,
      withCredentials: true,
    })
    .then((res) => {
        console.log(res.data.chatrooms);
        setChatroomList(res.data.chatrooms);
        setIsLoading(false);
    })
  }, []);

  if(isLoading)
    return (<div>로딩중...</div>);

  return (
    <>
      <div>코Talk</div>
      <div>알림표시</div>
      <div>Profile box</div>
      <br></br>
      <br></br>
      <ul>
          {chatroomList.map((item, i) => {
            if(item.profile1 == profilePk)
              return (<Chatbar key={i} chatroomPk={item.pk} friendPk={item.profile2} nickname={item.nickname2} lastChat={item.lastChat}/>)
            else
              return (<Chatbar key={i} chatroomPk={item.pk} friendPk={item.profile1} nickname={item.nickname1} lastChat={item.lastChat}/>)}
          )}
      </ul>
    </>
  );
}

export default Chatlist;
