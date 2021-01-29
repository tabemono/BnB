import React from "react";
import SearchMap from "../map/search_map";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRides } from "../../actions/ride_actions";
import { updateBounds } from "../../actions/filter_actions";

const msp = (state) => {
  return {
    rides: Object.values(state.entities.rides),
  };
};

const mdp = (dispatch) => ({
  fetchRides: (keyword) => dispatch(fetchRides(keyword)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
});

export default withRouter(connect(msp, mdp)(SearchMap));
