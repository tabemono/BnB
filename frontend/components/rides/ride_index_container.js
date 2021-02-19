import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import { fetchRides, fetchRide, rideSearch } from "../../actions/ride_actions";
import RideIndex from "./ride_index";

const mSTP = (state) => ({
  rides: Object.values(state.entities.rides),
  type: "index",
});

const mDTP = (dispatch) => ({
  fetchRides: () => dispatch(fetchRides()),
  // rideSearch: (keyword) => dispatch(rideSearch(keyword)),
  requestRide: (rideId) => dispatch(fetchRide(rideId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mSTP, mDTP)(RideIndex);
