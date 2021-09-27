import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const history = useHistory();

  const signup = async (signupInfo) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/auth/signup',
      data: signupInfo,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        history.push({
          pathname: '/',
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
      <form onSubmit={onSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id" />
        <label htmlFor="pwd">PW</label>
        <input type="password" id="pwd" name="pwd" />
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

export default Signup;
