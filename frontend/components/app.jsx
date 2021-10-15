import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./navbar/navbar_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash_page";
import Modal from "./modal/modal";
import RideIndex from "./rides/ride_index_container";
import RideShowContainer from "./rides/ride_show_container";
import Search from "./search_bar/search_container";
import BookingIndexContainer from "./bookings/booking_index_container";

const App = () => (
  <>
    <Modal />

    <Route path="/" component={NavBar} />

    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/rides" component={RideIndex} />
      <Route exact path="/search=:keyword" component={Search} />
      <Route exact path="/rides/:rideId" component={RideShowContainer} />
      <ProtectedRoute
        exact
        path={`/:userId/bookings`}
        component={BookingIndexContainer}
      />
    </Switch>
  
  </>
);

export default App;
