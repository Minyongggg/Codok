import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
import '../../css/auth/signup.scss'

function Signup() {
  const history = useHistory();

  const signup = async (signupInfo) => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/auth/signup",
      data: signupInfo,
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
    const signupInfo = { id: e.target.id.value, pwd: e.target.pwd.value };
    return signup(signupInfo);
  };

  return (
    <>
    <div className="container">
      <Circle><i class="fas fa-arrow-left"></i></Circle>
      <div>회원가입 시작</div>

      <form onSubmit={onSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id" />
        <label htmlFor="pwd">PW</label>
        <input type="password" id="pwd" name="pwd" />
        <button type="submit">Sign up</button>
      </form>
    </div>
    </>
  );
}
const Circle = styled.div`
  width: 44px;
  height: 44px;
  background-color: #eee;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`
export default Signup;
