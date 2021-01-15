import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchRides } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";

const mstp = (state) => ({
  rides: Object.values(state.entities.rides),
  search: state.entities.search,
});

const mdp = (dispatch) => {
  return {
    fetchRides: (query) => dispatch(fetchRides(query)),
   
  };
};

export default withRouter(connect(mstp, mdp)(SearchBar));
