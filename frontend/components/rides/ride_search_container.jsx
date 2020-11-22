import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import RideSearch from "./RideSearch";

const msp = (state) => {
  return {
    rides: Object.values(state.entities.rides),
  };
};

const mdp = (dispatch) => {
  return {
    updateFilters: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default connect(msp, mdp)(RideSearch);
