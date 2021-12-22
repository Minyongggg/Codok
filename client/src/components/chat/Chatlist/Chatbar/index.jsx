import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Chatbar({chatroomPk, friendPk, nickname, lastChat}) {
  const history = useHistory();
  
  return (
    <>
    <div onClick={() => history.push({
        pathname: '/chatroom',
        state: {
          friendPk: friendPk,
          friendName: nickname
        }
      })}>
      <div>닉네임: {nickname}</div>
      <div>마지막 채팅: {lastChat}</div>
    </div>
    <br></br>
    </>
  );
}

export default Chatbar;
