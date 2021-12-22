import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Timetable from "../components/Timetable";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup/index.jsx";
import Profile from "../components/auth/Profile/index.jsx";
import Splash from "../components/auth/Splash";
import Friend from "../components/Friend/index";
import Chatlist from "../components/chat/Chatlist/index.jsx";
import Chatroom from "../components/chat/Chatroom/index.jsx";
import Mypage from "../components/Mypage";
import PageNotFound from "../components/PageNotFound";
import Footer from "../components/common/Footer";
import Board from "../components/board/index.jsx";
import Write from "../components/board/write/index";
import Detail from "../components/board/detail/index";
// import Edit from "../components/board/edit/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../atoms/atoms";
import axios from "axios";

function Router() {
  const profilePk = localStorage.getItem("CodokId");
  const [profile, setProfile] = useRecoilState(profileState);
  useEffect(() => {
    console.log(profilePk);
    if (profilePk) {
      getProfile();
      return;
    }
    setProfile(() => "none");
  }, []);

  const getProfile = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/api/profiles/${profilePk}`,
      withCredentials: true,
    })
      .then((res) => {
        setProfile(() => res.data.data);
      })
      .catch((err) => console.log(err));
  };

  if (profile === null) return <div>로딩중</div>;

  if (profile === "none")
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/splash">
            <Splash />
          </Route> */}
          <Route path="/auth/signup">
            <Signup />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/profile">
            <Profile />
          </Route>
          <Route>
            <Splash />
          </Route>
        </Switch>
      </BrowserRouter>
    );

  return (
    <BrowserRouter>
      <Switch>
        {/* home1 */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/splash">
          <Splash />
        </Route> */}
        <Route exact path="/home">
          <Timetable />
        </Route>
        {/* auth */}
        <Route exact path="/auth/signup">
          <Signup />
        </Route>

        <Route exact path="/board">
          <Board />
        </Route>
        <Route exact path="/board/write">
          <Write />
        </Route>
        <Route exact path="/board/detail">
          <Detail />
        </Route>
        {/* <Route exact path="/board/edit">
          <Edit/>
        </Route>  */}
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/profile">
          <Profile />
        </Route>
        {/* friend */}
        <Route exact path="/friend">
          <Friend />
        </Route>
        {/* chat */}
        <Route exact path="/chatlist">
          <Chatlist />
        </Route>
        <Route exact path="/chatroom">
          <Chatroom />
        </Route>
        {/* board */}
        <Route exact path="/user/mypage">
          <Mypage />
        </Route>
        <Route exact path="/user/mypage">
          <Mypage />
        </Route>
        <Route>
          <Timetable />
          {/* <PageNotFound /> */}
        </Route>
      </Switch>

      {/* <Footer /> */}
      {/* 일단 넣어놓긴 했지만 푸터가 없어야 되는 페이지도 있으니까 각 페이지에서 불러오면 좋을 듯 */}
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
