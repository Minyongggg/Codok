import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      id: e.target.id.value,
      pwd: e.target.pwd.value,
    };
    return login(loginInfo);
  };

  const login = async (loginInfo) => {
    axios({
      method: "post",
      url: "http://localhost:5000/user/login",
      data: loginInfo,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        history.push({
          pathname: "/",
          state: { user: res.data },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id"></input>
        <label htmlFor="pwd">PW</label>
        <input type="password" id="pwd" name="pwd"></input>
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default Login;
