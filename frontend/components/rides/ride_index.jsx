import React from "react";
// import Carousel from 'nuka-carousel';
import RideIndexItem from "./ride_index_item";
import BikeMap from "../map/bike_map";
import { withRouter } from "react-router";
import { deleteKeyword } from "../../actions/keyword_actions";

class RideIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  render() {
    const {
      requestRide,
      rides,
      updateFilter,
      keyword,
      rideSearch,
      deleteKeyword,
    } = this.props;
    const count = this.props.rides.length;
    const ifZero = () => {
      if (count === 0 || keyword === "") {
        return (
          <div>
            <p>No results found, Try New york or San Francisco.</p>
          </div>
        );
      } else {
        return <span className="index-count">{count} bikes to ride.</span>;
      }
    };
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
      <div>
        <div className="ride-index-page">
          <div className="ride-index">
            <ul className="ride-index-left">
              <div>{ifZero()}</div>
              {rideIndexItems}
            </ul>
            <div id="map-container">
              <BikeMap
                type={this.props.type}
                rideSearch={rideSearch}
                keyword={keyword}
                rides={rides}
                updateFilter={updateFilter}
                deleteKeyword={deleteKeyword}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RideIndex);
