import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import NavBar from "./navbar/navbar_container";
import SignUpContainer from "./session_form/signup_form_container";
import { AuthRoute, Protected } from "../util/route_util";
import splash_page from "./splash/splash_page";
import Modal from "./modal/modal";
import RidePage from "./rides/ride_container";
const App = () => (
  <>
    <Modal />
    <Route path="/" component={NavBar} />
    <Switch>
      <Route path="/rides" component={RidePage} />
      <Route exact path="/" component={splash_page} />
    </Switch>
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} /> */}
  </>
);

export default App;
