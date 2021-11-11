import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
// import '../../css/auth/signup.scss'
import * as S from "../style.js";
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
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <S.Container>
      <S.Circle onClick={goBack}><i className="fas fa-arrow-left"></i></S.Circle>

      <S.Title>회원가입 시작</S.Title>
      <form onSubmit={onSubmit}>
        <S.InputWrapper><S.InputIcon className="far fa-user"/><S.InputID type="text" id="id" name="id" placeholder="아이디"/></S.InputWrapper>  
        <S.InputWrapper><S.InputIcon className="fas fa-lock"/><S.InputPW type="password" id="pwd" name="pwd" placeholder="비밀번호"/></S.InputWrapper>
        <S.YB/>
        <S.ButtonWrapper><S.Button type="submit">회원가입</S.Button></S.ButtonWrapper>
      </form>
      </S.Container>
    </>
  );
}
export default Signup;
