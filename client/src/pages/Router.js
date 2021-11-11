import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home/Home";
import Timetable from "../components/Timetable";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup/index.jsx";
import Profile from "../components/auth/Profile";
import Splash from "../components/auth/Splash";
import Mypage from "../components/Mypage";
import PageNotFound from "../components/PageNotFound";
import Footer from "../components/common/Footer";

function Router() {
  return (
    <BrowserRouter>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
      <Switch>
        {/* home1 */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/splash">
          <Splash/>
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
        {/* chat */}

        {/* board */}
        <Route exact path="/auth/mypage">
          <Mypage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      {/* <Footer /> */}
      {/* 일단 넣어놓긴 했지만 푸터가 없어야 되는 페이지도 있으니까 각 페이지에서 불러오면 좋을 듯 */}
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
