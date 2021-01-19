import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import NavBar from "./navbar/navbar_container";
import SignUpContainer from "./session_form/signup_form_container";
import { AuthRoute, Protected } from "../util/route_util";
import Splash from "./splash/splash_page";
import Modal from "./modal/modal";
import RideIndex from "./rides/ride_index_container";
import RideShowContainer from "./rides/ride_show_container";
import Ride from "../components/rides/ride";
// import RideSearchContainer from './rides/ride_search_container';
import Search from '../components/search_bar/search_index';
const App = () => (
  <>
    <Modal />
    <Route path="/" component={NavBar} />
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/rides" component={RideIndex} />
      <Route exact path="/search/:input" component={Search} />
      <Route exact path="/rides/:rideId" component={RideShowContainer} />
      {/* <Route exact path="/rides/:rideId" component={Modal} /> */}

      {/* <Route path="/rides" component={RideSearchContainer} /> */}
    </Switch>
  </>
);

export default App;
