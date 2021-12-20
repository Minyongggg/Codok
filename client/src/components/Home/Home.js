import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory, Link } from "react-router-dom";
import { UserId } from "../auth/Login"

function Home() {
  const location = useLocation();
  const history = useHistory();

  const logout = async (e) => {
    await axios({
      method: "get",
      url: "http://localhost:8000/api/auth/logout",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
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
