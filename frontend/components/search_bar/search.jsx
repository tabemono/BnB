import React from "react";
import RideIndex from "../rides/ride_index";
import BikeMap from "../map/bike_map";

const Search = ({
  rides,
  fetchRides,
  //   updateBounds,
  requestRide,
  updateFilter,
  keyword,
  deleteKeyword,
}) => {
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
            />
          </ul>
          <div id="map-container">
            <BikeMap
              rides={rides}
              //   updateBounds={updateBounds}
              updateFilter={updateFilter}
              keyword={keyword}
              deleteKeyword={deleteKeyword}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
