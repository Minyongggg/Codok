import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory, Link } from "react-router-dom";
import { UserId } from "../auth/Login";
import { useRecoilState } from "recoil";
import { profileState } from "../../atoms/atoms";

function Home() {
  const location = useLocation();
  const history = useHistory();
  const [profile, setProfile] = useRecoilState(profileState);
  const URL =  process.env.NODE_ENV === 'production'
  ? 'http://ec2-3-38-152-56.ap-northeast-2.compute.amazonaws.com:8000/api/auth/logout'
  : 'http://localhost:8000/api/auth/logout';
  useEffect(() => {
    console.log(profile);
  }, [profile]);

  const logout = async (e) => {
    await axios({
      method: "get",
      url: URL,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("CodokId");
        setProfile(() => "none");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>CODOK(home)</div>
      <Link to="auth/signup">Sign up</Link>
      <Link to="auth/login">Log in</Link>
      <button onClick={logout} type="button">
        Log out
      </button>
    </>
  );
}

export default Home;
