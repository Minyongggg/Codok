import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useHistory();

  const login = async (loginInfo) => {
    axios({
<<<<<<< HEAD:client/src/routes/auth/Login.js
      method: 'post',
      url: 'http://localhost:8000/auth/login',
=======
      method: "post",
      url: "http://localhost:8000/auth/login",
>>>>>>> minyong2:client/src/routes/Login.js
      data: loginInfo,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        history.push({
          pathname: "/",
        });
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const loginInfo = { id: e.target.id.value, pwd: e.target.pwd.value };
    return login(loginInfo);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id" />
        <label htmlFor="pwd">PW</label>
        <input type="password" id="pwd" name="pwd" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default Login;
