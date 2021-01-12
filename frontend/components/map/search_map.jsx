import React from "react";
import BikeMap from "./bike_map";
import RideIndex from "../rides/ride_index";

const SearchMap = ({ rides, fetchRides, updateBounds, bounds }) => (
  <div className="ride-index-page">
    <div className="ride-map">
      <RideIndex rides={rides} fetchRides={fetchRides} />
      <div className="search-map">
        <BikeMap rides={rides} updateBounds={updateBounds} />
      </div>
    </div>
  </div>
);

export default SearchMap;
