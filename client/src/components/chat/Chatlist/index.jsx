import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Chatbar from "./Chatbar/index";

function Chatroom() {
  useEffect(() => {
    //1. api 요청으로 유저와 연관된 chatroom 데이터 가져옴
    //
  });

  return (
    <>
      <div>코Talk</div>
      <div>알림표시</div>
      <div>Profile box</div>
      <Link to="/chatroom">
        <Chatbar />
      </Link>
    </>
  );
}

export default Chatroom;
