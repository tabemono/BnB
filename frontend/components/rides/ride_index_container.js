import { connect } from "react-redux";
import {
  fetchRides,
  createRide,
  updateRide,
  fetchRide,
} from "../../actions/ride_actions";
import RideIndex from "./ride_index";

const mSTP = (state) => ({
  rides: Object.values(state.entities.rides),
  type: "index",
});

const mDTP = (dispatch) => ({
  fetchRides: () => dispatch(fetchRides()),
  requestRide: (rideId) => dispatch(fetchRide(rideId)),
  // createRide: (ride) => dispatch(createRide(ride)),
  // updateRide: (ride) => dispatch(updateRide(ride)),
});

export default connect(mSTP, mDTP)(RideIndex);
