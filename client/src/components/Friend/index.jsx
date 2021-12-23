import { React, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Friendbar from "./Friendbar/index";
import config from "../../config/config";
import * as S from "./style";
import Header from "../common/Header";

function Friend() {
  const location = useLocation();
  const courseId = location.state.courseId;
  const courseName = location.state.name;
  const profilePk = localStorage.getItem("CodokId");
  const [isLoading, setIsLoading] = useState(true);
  const [profileList, setProfileList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "get",
      url: config.BASE_URL + "/api/profiles/lectures/" + courseId,
      withCredentials: true,
    }).then((res) => {
      setProfileList(res.data.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(profileList);
  }, [profileList]);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>{courseName} 수강친구</S.Title>
        <S.CourseId>{courseId}</S.CourseId>
        <S.Notice>수업을 독강하는 친구에게 톡을 걸어보세요!</S.Notice>

        {profileList.map((item, i) => {
          if (item.pk != profilePk)
            return (
              <Friendbar
                key={i}
                friendPk={item.pk}
                nickname={item.nickname}
                introduce={item.introduce}
                gender={item.gender}
                mateWant={item.mateWant}
              />
            );
        })}
      </S.Container>
    </>
  );
}

export default Friend;
