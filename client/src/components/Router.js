import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../routes/main/Home';
import Timetable from '../routes/main/Timetable';
import Login from '../routes/auth/Login';
import Signup from '../routes/auth/Signup';
import Profile from '../routes/auth/Profile';
import Mypage from '../routes/Mypage';
import PageNotFound from '../routes/PageNotFound';
import '../css/base.css';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* home */}
        <Route exact path="/">
          <Home />
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
      <Footer />
    </BrowserRouter>
  );
}

function Footer(){
  return(
    <>
    <div className="footer-container">
      <div className="footer-home">
        <div className="footer-icon"></div>
        <div>홈</div>
      </div>
      <div className="footer-chat">
        <div className="footer-icon"></div>
        <div>채팅</div>
      </div>
    </div>
    </>
  )
};

export default Router;
