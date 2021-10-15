import React from "react";
import RideIndex from "../rides/ride_index";

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
      <RideIndex
        rides={rides}
        fetchRides={fetchRides}
        keyword={keyword}
        requestRide={requestRide}
        updateFilter={updateFilter}
        deleteKeyword={deleteKeyword}
      />
    );
  }
}

export default Search;
