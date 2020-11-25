import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import NavBar from "./navbar/navbar_container";
import SignUpContainer from "./session_form/signup_form_container";
import { AuthRoute, Protected } from "../util/route_util";
import SplashPage from "./splash/splash_page";
import Modal from "./modal/modal";
import RideIndex from "./rides/ride_index_container";
import RideShowContainer from './rides/ride_show_container';
// import RideSearchContainer from './rides/ride_search_container';
const App = () => (
  <>
    <Modal />
    <Route path="/" component={NavBar} />
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/rides" component={RideIndex} />
      <Route exact path="/rides/:rideId" component={RideShowContainer} />
      <Route exact path="/rides/:rideId" component={Modal} />
      
      {/* <Route path="/rides" component={RideSearchContainer} /> */}
    </Switch>
  </>
);

export default App;
