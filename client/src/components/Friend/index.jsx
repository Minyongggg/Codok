import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import Friendbar from "./Friendbar/index";
import { useRecoilValue } from "recoil";
import { profileState } from "../../atoms/atoms";


function Friend() {
    const location = useLocation();
    const courseId = location.state.courseId;
    const courseName = location.state.name;
    const profilePk = localStorage.getItem("CodokId")
    const [isLoading, setIsLoading] = useState(true);
    const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    axios({
        method: "get",
        url: `http://localhost:8000/api/profiles/lectures/${courseId}`,
        withCredentials: true,
      })
      .then((res) => {
          setProfileList(res.data.data);
          setIsLoading(false);
      })
  }, []);

  if(isLoading)
    return (<div>로딩중...</div>);

  return (
    <>
      <div>{courseName} {courseId} 수강친구</div>
      <div>수업을 독강하는 친구에게 톡을 걸어보세요!</div>      
      <ul>
          {profileList.map((item, i) => {
            if(item.pk != profilePk)
              return (<Friendbar key={i} friendPk={item.pk} nickname={item.nickname} gender={item.gender}/>)}
          )}
      </ul>
    </>
  );
}

export default Friend;
