import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Chatbar from "./Chatbar/index";

function Chatroom() {
  const profile = useRecoilValue(profileState);
  
  useEffect(() => {
    
  }, []);

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
