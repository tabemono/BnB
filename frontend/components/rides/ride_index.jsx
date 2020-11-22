import React from "react";
// import Carousel from 'nuka-carousel';
import RideIndexItem from "./ride_index_item";
import BikeMap from "../map/bike_map";
import {withRouter} from "react-router";

class RideIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  render() {
    const { requestRide } = this.props

    const rideIndexItems = this.props.rides.map(ride => {
      return <RideIndexItem key={ride.id} ride={ride} history={this.props.history} requestRide={requestRide}/>
    })
    return (
      <div>
        <h1> THIS PAGE IS UNDER CONSTRUCTION</h1>
        {rideIndexItems}
        <div>
          {/* <BikeMap/> */}
        </div>
      </div>
    );
  }
}

export default withRouter(RideIndex);
