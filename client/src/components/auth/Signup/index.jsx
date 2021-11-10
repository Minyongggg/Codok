import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
// import '../../css/auth/signup.scss'
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
      <Container>
      <Circle onClick={goBack}><i className="fas fa-arrow-left"></i></Circle>

      <Title>회원가입 시작</Title>
      <form onSubmit={onSubmit}>
        <InputWrapper><InputIcon className="far fa-user"/><InputID type="text" id="id" name="id"/></InputWrapper>  
        <InputWrapper><InputIcon className="fas fa-lock"/><InputPW type="password" id="pwd" name="pwd"/></InputWrapper>
        <YB/>
        <ButtonWrapper><Button type="submit">Sign up</Button></ButtonWrapper>
      </form>
      </Container>
    </>
  );
}

const InputIcon = styled.i`
  font-size:1.5rem;
  margin-right: 4px;

`
const YB = styled.div`
  height: 300px
`
const Title = styled.h1`
  margin-bottom: 50px;
`
const Container = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0 30px 0 30px;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  background-color: #fff;
`
const Circle = styled.div`
  width: 44px;
  height: 44px;
  background-color: #eee;
  display:flex;
  cursor:pointer;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`
const InputWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #eee;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`
const Button = styled.button`
  width: 160px;
  height: 56px;
  color: white;
  background-color:#18A0FB;
  border-style: none;
  border-radius: 56px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ButtonWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
`
const InputID = styled.input`
  width: 100%;
  font-size: 1rem;
  height: 100%;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border-style: none;
`
const InputPW = styled(InputID)`
`
// const inputStyle = {
//   width: "100%",
//   font-size: "1rem",
//   height: "100%",
//   font-family: 'Spoqa Han Sans Neo', 'sans-serif',
//   border-style: "none",
// };
export default Signup;
