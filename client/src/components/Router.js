import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Signup from "../routes/Signup";
import Mypage from "../routes/Mypage";
import PageNotFound from "../routes/PageNotFound";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/signup">
          <Signup />
        </Route>
        <Route exact path="/user/login">
          <Login />
        </Route>
        <Route exact path="/user/mypage">
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
