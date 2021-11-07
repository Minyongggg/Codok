import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory, Link } from "react-router-dom";

function Home() {
  const location = useLocation();
  const history = useHistory();

  const logout = async (e) => {
    await axios({
      method: "get",
      url: "http://localhost:8000/auth/logout",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>Its Home</div>
      <Link to="auth/mypage">My Page</Link>
      <button onClick={logout} type="button">
        Log out
      </button>
      <Link to="auth/login">Log in</Link>
    </>
  );
}

export default Home;
