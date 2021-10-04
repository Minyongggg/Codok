import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/auth/Login';
import Signup from '../routes/auth/Signup';
import Profile from '../routes/auth/Profile';
import Mypage from '../routes/Mypage';
import PageNotFound from '../routes/PageNotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
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
    </BrowserRouter>
  );
}

export default Router;
