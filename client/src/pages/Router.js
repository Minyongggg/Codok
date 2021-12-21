import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Timetable from "../components/Timetable";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup/index.jsx";
import Profile from "../components/auth/Profile";
import Splash from "../components/auth/Splash";
import Friend from "../components/Friend/index"
import Chatlist from "../components/Chat/Chatlist/index.jsx";
import Chatroom from "../components/Chat/Chatroom/index.jsx";
import Mypage from "../components/Mypage";
import PageNotFound from "../components/PageNotFound";
import Footer from "../components/common/Footer";
import { useRecoilValue } from "recoil";
import { profileState } from "../atoms/atoms";

function Router() {
  const profile = useRecoilValue(profileState);

  if (!profile) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth/signup">
            <Signup />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        {/* home1 */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/splash">
          <Splash />
        </Route>
        <Route exact path="/home">
          <Timetable />
        </Route>
        {/* auth */}
        <Route exact path="/auth/signup">
          <Signup />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/profile">
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
        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      {/* <Footer /> */}
      {/* 일단 넣어놓긴 했지만 푸터가 없어야 되는 페이지도 있으니까 각 페이지에서 불러오면 좋을 듯 */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;
