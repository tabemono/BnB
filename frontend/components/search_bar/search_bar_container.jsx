import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { rideSearch } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";
import { updateFilter } from "../../actions/filter_actions";


const mstp = (state, ownProps) => {
  const allRides = Object.values(state.entities.rides);


  return {
    rides: Object.values(state.entities.rides),

    type: "search",
  };
};

const mdp = (dispatch) => {
  return {
    rideSearch: (keyword) => dispatch(rideSearch(keyword)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default withRouter(connect(null, mdp)(SearchBar));
