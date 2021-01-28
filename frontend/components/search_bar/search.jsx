import React from "react";
import RideIndex from "../rides/ride_index";
import BikeMap from "../map/bike_map";

const Search = ({
  rides,
  fetchRides,
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
            <RideIndex rides={rides} fetchRides={fetchRides} keyword={keyword} />
          </ul>
          <div id="map-container">
            <BikeMap
              rides={rides}
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
