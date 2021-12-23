import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";

function Chatbar({ chatroomPk, friendPk, nickname, lastChat }) {
  const history = useHistory();

  return (
    <>
      <S.Container
        onClick={() =>
          history.push({
            pathname: "/chatroom",
            state: {
              friendPk: friendPk,
              friendName: nickname,
            },
          })
        }
      >
        <S.ProfileImg
          src="http://hijeju.org/common/img/default_profile.png"
          alt=""
        />
        <S.ProfileContent>
          <S.Nickname>{nickname}</S.Nickname>
          <div>{lastChat}</div>
        </S.ProfileContent>
      </S.Container>
    </>
  );
}

export default Chatbar;
