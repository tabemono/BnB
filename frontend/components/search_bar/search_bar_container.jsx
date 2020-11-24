import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchRides } from "../../actions/ride_actions";
import { withRouter } from "react-router-dom";
import { runSearch } from "../../actions/search_actions";

const mstp = state => {
  return {
    query: {
      location: "",
      brand: "",
      style: "",
      model: "",
    }
  }
}

const mdp = (dispatch) => {
  return {
    fetchRides: (query) => dispatch(fetchRides(query)),
    runSearch: (query) => dispatch(runSearch(query))
  }
    
};



export default withRouter(connect(mstp, mdp)(SearchBar));
