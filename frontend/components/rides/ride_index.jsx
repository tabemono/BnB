import React from "react";
// import Carousel from 'nuka-carousel';
import RideIndexItem from "./ride_index_item";
import BikeMap from "../map/bike_map";
import { withRouter } from "react-router";

class RideIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  render() {
    const { requestRide, rides } = this.props;

    const rideIndexItems = this.props.rides.map((ride) => {
      return (
        <RideIndexItem
          key={ride.id}
          ride={ride}
          history={this.props.history}
          requestRide={requestRide}
        />
      );
    });

    return (
      <div className='ride-index-page'>
        <div className="ride-index">
          <div className="ride-index-left">{rideIndexItems}</div>
          <div id="map-container">
            <BikeMap rides={rides} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RideIndex);
