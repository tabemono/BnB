import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchRides } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";

export const mdp = (dispatch) => ({
  fetchRides: (rides) => dispatch(fetchRides(rides)),
    
});



export default withRouter(connect(null, mdp)(SearchBar));
