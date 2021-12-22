import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as S from "../style.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../../atoms/atoms.js";

function Login() {
  const history = useHistory();
  const [ user, setUser ] = useRecoilState(userState);
  const [ error, setError ] = useState();

  const login = async (loginInfo) => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/auth/login",
      data: loginInfo,
      withCredentials: true,
    })
      .then((res) => {
        localStorage.setItem("CodokId", res.data.profile.pk);
        setUser("isLogin");
        history.push("/home");
      })
      .catch((err) => {
        console.dir(err);
        if(err.response.status==401 && err.response.data=="Unauthorized"){
          alert("아이디 혹은 패스워드가 잘못되었습니다.");
          setError("아이디 혹은 패스워드가 잘못되었습니다.");
        }
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const loginInfo = { id: e.target.id.value, pwd: e.target.pwd.value };
    return login(loginInfo);
  };

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if(user != "none"){
      history.push({
        pathname: "/home"
      })
    }
  }, [user])

  return (
    <>
      <S.Container>
        <S.Circle onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </S.Circle>

        <S.Title>로그인</S.Title>
        <form onSubmit={onSubmit}>
          <S.InputWrapper>
            <S.InputIcon className="far fa-user" />
            <S.InputID
              requiredtype="text"
              id="id"
              name="id"
              placeholder="아이디"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputIcon className="fas fa-lock" />
            <S.InputPW
              type="password"
              id="pwd"
              name="pwd"
              placeholder="비밀번호"
              required
            />
          </S.InputWrapper>
          <div style={{color: 'red', textAlign: 'center'}}>{error}</div>
          <S.YB />
          <S.ButtonWrapper>
            <S.Button type="submit">로그인</S.Button>
          </S.ButtonWrapper>
        </form>
      </S.Container>
    </>
    // <>
    //   <form onSubmit={onSubmit}>
    //     <label htmlFor="id">ID</label>
    //     <input type="text" id="id" name="id" />
    //     <label htmlFor="pwd">PW</label>
    //     <input type="password" id="pwd" name="pwd" />
    //     <button type="submit">Log in</button>
    //   </form>
    // </>
  );
}

export default Login;
