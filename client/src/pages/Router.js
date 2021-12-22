import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "../components/Homesdf/Home";
import Timetable from "../components/Timetable";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup/index.jsx";
import Profile from "../components/auth/Profile/index.jsx";
import Splash from "../components/auth/Splash";
import Friend from "../components/Friend/index";
import Chatlist from "../components/Chat/Chatlist/index.jsx";
import Chatroom from "../components/Chat/Chatroom/index.jsx";
import Mypage from "../components/Mypage";
import PageNotFound from "../components/PageNotFound";
import Footer from "../components/common/Footer";
import Board from "../components/board/index.jsx";
import Write from "../components/board/write/index";
import Detail from "../components/board/detail/index";
import Edit from "../components/board/edit/index"
import { useProfile } from "../hooks/useProfile";
import { useUser } from "../hooks/useUser";
// import Edit from "../components/board/edit/index";

function Router() {
  const { profile } = useProfile();
  const { user } = useUser();

  if (user !== "isLogin")
    return (
      <BrowserRouter>
        <Switch>
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
          <Timetable />
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

        <Route exact path="/board/:courseId">
          <Board />
        </Route>
        <Route exact path="/board/:courseId/write">
          <Write />
        </Route>
        <Route exact path="/board/:courseId/:postPk">
          <Detail />
        </Route>
        <Route exact path="/board/:courseId/:postPk/edit">
          <Edit/>
        </Route> 
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
