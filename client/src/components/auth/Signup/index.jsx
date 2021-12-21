import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
// import '../../css/auth/signup.scss'
import { useRecoilState } from "recoil";
import { profileState } from "../../../atoms/atoms.js";
import * as S from "../style.js";

function Signup() {
  const history = useHistory();
  const [profile, setProfile] = useRecoilState(profileState);


  const signup = async (signupInfo) => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/auth/signup",
      data: signupInfo,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setProfile(() => res.data.profile);
        history.push({
          pathname: "/auth/profile",
        });
      })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("이미 존재하는 아이디입니다.")
    //     history.push({
    //     pathname: "/auth/signup",
    //   })
    // });
    //에러캐치 못하지만 일단 넘김
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const signupInfo = { id: e.target.id.value, pwd: e.target.pwd.value };
    // window.location.replace("/auth/profile")
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
