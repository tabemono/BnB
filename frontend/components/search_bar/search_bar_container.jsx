import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchRides } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";
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
  };
};

export default withRouter(connect(mstp, mdp)(SearchBar));
