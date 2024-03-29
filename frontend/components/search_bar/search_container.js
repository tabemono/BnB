import { connect } from "react-redux";
import Search from "./search";
import { fetchRides, fetchRide, rideSearch } from "../../actions/ride_actions";
import { updateFilter } from "../../actions/filter_actions";

import { deleteKeyword } from "../../actions/keyword_actions";

const mstp = (state) => {
  return {
    rides: Object.values(state.entities.rides),
    keyword: state.ui.keyword,
    type: "search",
  };
};

const mdp = (dispatch) => {
  return {
    fetchRides: () => dispatch(fetchRides()),
    rideSearch: (keyword) => dispatch(rideSearch(keyword)),
    requestRide: (rideId) => dispatch(fetchRide(rideId)),
    deleteKeyword: () => dispatch(deleteKeyword()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default connect(mstp, mdp)(Search);
