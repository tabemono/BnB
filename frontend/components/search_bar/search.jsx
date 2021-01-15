import React from "react";
import BikeMap from "../map/bike_map";
import RideIndex from "../rides/ride_index";
import RideIndexitem from "../rides/ride_index_item";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  render() {
    const {
      rides,
      searchedCity,
      requestRide,
    } = this.props;
    const SearchedLength = searchedCity.length;
    const SearchedItems = searchedCity.map((ride) => (
      <RideIndexitem
        key={ride.id}
        history={this.props.history}
        requestRide={requestRide}
        ride={ride}
      />
    ));
    return (
      <div>
        <div className="ride-index-page">
          <div className="ride-index">
            <ul className="ride-index-left">
              <span className="index-count">{count} bikes to ride.</span>
              {SearchedItems}
            </ul>
            <div id="map-container">
              <BikeMap rides={rides} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
