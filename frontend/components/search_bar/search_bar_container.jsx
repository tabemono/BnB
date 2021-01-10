import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchRides, fetchSearch } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";
import { clearSearch } from "../../actions/search_actions";

const mstp = (state) => ({
  rides: Object.values(state.entities.rides),
  search: state.entities.search,
});

const mdp = (dispatch) => {
  return {
    fetchRides: (query) => dispatch(fetchRides(query)),
    fetchSearch: (query) => dispatch(fetchSearch(query)),
    clearSearch: () => dispatch(clearSearch()),
  };
};

export default withRouter(connect(mstp, mdp)(SearchBar));
