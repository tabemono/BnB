import React from "react";
import RideIndex from "../rides/ride_index";
import BikeMap from "../map/bike_map";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      rides,
      fetchRides,
      //   updateBounds,
      // rideSearch,
      requestRide,
      updateFilter,
      keyword,
      deleteKeyword,
    } = this.props;

    return (
      <div>
        <div className="ride-index-page">
          <div className="ride-index">
            <ul className="ride-index-left">
              <span className="index-count"></span>
              <RideIndex
                rides={rides}
                fetchRides={fetchRides}
                keyword={keyword}
                requestRide={requestRide}
                updateFilter={updateFilter}
                deleteKeyword={deleteKeyword}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
