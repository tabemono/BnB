import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchRides, rideSearch } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";
// import { updateFilter } from "../../actions/filter_actions";

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
  };
};

const mdp = (dispatch) => {
  return {
    fetchRides: (query) => dispatch(fetchRides(query)),
    rideSearch: (keyword) => dispatch(rideSearch(keyword))
    // updateFilter: (bounds) => dispatch(updateBounds(bounds)),
  };
};

export default withRouter(connect(null, mdp)(SearchBar));
