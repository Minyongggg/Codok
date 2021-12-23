import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as HandSVG } from "../../../assets/icon/hand.svg";
import * as S from "./style";

function Friendbar({ friendPk, nickname, gender, mateWant, introduce }) {
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
          <div>
            <S.Nickname>{nickname}</S.Nickname>
            {mateWant && <HandSVG />}
          </div>
          {/* <div> */}
          {/* {gender !== "default" && <span>{gender === "Male" ? 남 : 여}</span>} */}
          {introduce !== "default" && <S.Introduce>{introduce}</S.Introduce>}
          {/* </div> */}
        </S.ProfileContent>
      </S.Container>
    </>
  );
}

export default Friendbar;
