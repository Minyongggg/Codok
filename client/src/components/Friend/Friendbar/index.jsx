import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Friendbar({friendPk, nickname, gender}) {
  const history = useHistory();

  return (
    <>
      <div onClick={() => history.push({
        pathname: '/chatroom',
        state: {
          friendPk: friendPk
        }
      })}>
        <div>{nickname}</div>
        <div>{gender}</div>
        <br></br>
      </div>
    </>
  );
}

export default Friendbar;
