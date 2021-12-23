import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Chatbar from "./Chatbar/index";
import { useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";
import config from "../../../config/config";
import * as S from "./style";
import { ReactComponent as HandSVG } from "../../../assets/icon/hand.svg";

function Chatlist() {
  const history = useHistory();
  const profilePk = localStorage.getItem("CodokId");
  const [isLoading, setIsLoading] = useState(true);
  const [chatroomList, setChatroomList] = useState(null);
  const profile = useRecoilValue(profileState);

  useEffect(async () => {
    await axios({
      method: "get",
      url: config.BASE_URL + "/api/chatrooms/" + profilePk,
      withCredentials: true,
    }).then((res) => {
      setChatroomList(() => res.data.chatrooms);
    });
  }, []);

  useEffect(() => {
    console.log(profile);
    if (chatroomList && profile) setIsLoading(false);
  }, [chatroomList, profile]);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <S.Container>
      <S.Title>코Talk</S.Title>
      {/* <div>알림표시</div> */}
      <S.Profile onClick={() => history.push({ pathname: "/auth/profile" })}>
        <S.ProfileImg
          src="http://hijeju.org/common/img/default_profile.png"
          alt=""
        />
        <S.ProfileContent>
          <S.ProfileTitle>
            <h3>{profile.nickname}</h3>
            {profile.mateWant && <HandSVG />}
          </S.ProfileTitle>
          <S.ProfileMainInfo>
            {profile.major === "default" ? (
              <div>전공 미지정</div>
            ) : (
              <div>{profile.major}</div>
            )}

            {profile.studentId === "default" ? (
              <div>학번 미지정</div>
            ) : (
              <div>{profile.studentId}</div>
            )}

            {profile.gender === "default" ? (
              <div>성별 미지정</div>
            ) : (
              <div>{profile.gender === "Male" ? "남" : "여"}</div>
            )}
          </S.ProfileMainInfo>
          {profile.introduce !== "default" && (
            <S.Introduce>{profile.introduce}</S.Introduce>
          )}
        </S.ProfileContent>
      </S.Profile>
      <br></br>
      <br></br>

      {chatroomList.map((item, i) => {
        if (item.profile1 == profilePk)
          return (
            <Chatbar
              key={i}
              chatroomPk={item.pk}
              friendPk={item.profile2}
              nickname={item.nickname2}
              lastChat={item.lastChat}
            />
          );
        else
          return (
            <Chatbar
              key={i}
              chatroomPk={item.pk}
              friendPk={item.profile1}
              nickname={item.nickname1}
              lastChat={item.lastChat}
            />
          );
      })}
    </S.Container>
  );
}

export default Chatlist;
