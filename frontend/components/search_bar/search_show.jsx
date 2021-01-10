import React, { useEffect } from "react";
import { fetchSearch } from "../../actions/ride_actions";
import { useSelector, useDispatch } from "react-redux";
import RideIndexItem from "../rides/ride_index_item";
import BikeMap from "../map/bike_map";
import { withRouter } from "react-router";

const SearchShow = () => {
  const rides = useSelector((state) => Object.values(state.entities.rides));
  const search = useSelector((state) => state.entities.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch(search.query));
  }, [fetchSearch, search]);

  const getResult = () => {
    if (!search.query) return "";
    else if (!rides.length)
      return "No places found, try something like 'New York' ";
    else `We found ${rides.length} rides for you to ride`;
  };

  return (
    <div className="ride-index-page">
      <div className="ride-index">
        <h2>{getResult()}</h2>
        <ul className="ride-index-left">
          <span className="index-count">{rides.length} bikes to ride.</span>
          {rides.map((ride) => (
            <RideIndexItem key={ride.id} ride={ride} />
          ))}
        </ul>
      </div>

      <div id="map-container">
        <BikeMap rides={rides} />
      </div>
    </div>
  );
};

export default withRouter(SearchShow);
