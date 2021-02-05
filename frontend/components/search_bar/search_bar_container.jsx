import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchRides, rideSearch } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";
import { updateFilter } from "../../actions/filter_actions";

// import Search from "./search";
const mstp = (state, ownProps) => {
  const allRides = Object.values(state.entities.rides);
  // const searchedTerm = ownProps.match.params.query.toLowerCase();
  // const searchedCity = allRides.filter((ride) => {
  //   return ride.city.toLowerCase().includes(searchTerm);
  // });

  return {
    rides: Object.values(state.entities.rides),
    // search: state.entities.search,
    // searchedCity: searchedCity,
    type: "search",
  };
};

const mdp = (dispatch) => {
  return {
    fetchRides: (query) => dispatch(fetchRides(query)),
    rideSearch: (keyword) => dispatch(rideSearch(keyword)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default withRouter(connect(null, mdp)(SearchBar));
