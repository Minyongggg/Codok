import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory, Link } from "react-router-dom";
import { UserId } from "../auth/Login";
import { useRecoilState } from "recoil";
import { profileState } from "../../atoms/atoms";
import { useUser } from "../../hooks/useUser";

function Home() {
  const location = useLocation();
  const history = useHistory();
  const [profile, setProfile] = useRecoilState(profileState);
  const { user, setUser } = useUser();

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  const logout = async () => {
    await axios({
      method: "get",
      url: "http://localhost:8000/api/auth/logout",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("CodokId");
        setProfile(() => "none");
        setUser(() => "none");
        console.log("profile: " + profile)
        console.log("user: "  + user);
        history.push({pathname: "/"})
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
