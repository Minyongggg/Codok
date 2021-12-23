import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { profileState, userState } from "../../../atoms/atoms.js";
import * as S from "../style.js";
import config from "../../../config/config"

function Signup() {
  const history = useHistory();
  const [profile, setProfile] = useRecoilState(profileState);
  const setUser = useSetRecoilState(userState);
  const [error, setError] = useState();

  const signup = async (signupInfo) => {
    axios({
      method: "post",
      url: config.BASE_URL + "/api/auth/signup",
      data: signupInfo,
      withCredentials: true,
    }).then((res) => {
        setProfile(() => res.data.profile);
        setUser(() => "isLogin");
        localStorage.setItem("CodokId", res.data.profile.pk);
        history.push({
          pathname: "/auth/profile",
        })
      })
      .catch((err) => {
          if(err.response.status==409 && err.response.data.message=="id duplicate"){
            alert("이미 사용 중인 아이디입니다.");
            setError("이미 사용 중인 아이디입니다.")
          }
        });
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
        <S.Circle onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </S.Circle>

        <S.Title>회원가입 시작</S.Title>
        <form onSubmit={onSubmit}>
          <S.InputWrapper>
            <S.InputIcon className="far fa-user" />
            <S.InputID
              required
              type="text"
              id="id"
              name="id"
              placeholder="아이디"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputIcon className="fas fa-lock" />
            <S.InputPW
              required
              type="password"
              id="pwd"
              name="pwd"
              placeholder="비밀번호"
            />
          </S.InputWrapper>
          <div style={{color: 'red', textAlign: 'center'}}>{error}</div>
          <S.YB />
          <S.ButtonWrapper>
            <S.Button type="submit">회원가입</S.Button>
          </S.ButtonWrapper>
        </form>
      </S.Container>
    </>
  );
}
export default Signup;
