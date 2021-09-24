import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

function Home() {
  const location = useLocation();
  const history = useHistory();

  const logout = async (e) => {
    await axios({
      method: "get",
      url: "http://localhost:5000/user/logout",
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
      <Link to="user/mypage">My Page</Link>
      <button onClick={logout}>Log out</button>
      <Link to="user/login">Log in</Link>
    </>
  );
}

export default Home;
