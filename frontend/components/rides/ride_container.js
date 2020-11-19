import { connect } from "react-redux";
import { fetchRides, createRide, updateRide } from "../../actions/ride_actions";
import Rides from "./ride";

const mSTP = (state, ownProps) => ({
  ride: state.entities.rides[ownProps.match.params.rideId],
});

const mDTP = (dispatch) => ({
  fetchRides: () => dispatch(fetchRides()),
  fetchRide: (rideId) => dispatch(fetchRide(rideId)),
  createRide: (ride) => dispatch(createRide(ride)),
  updateRide: (ride) => dispatch(updateRide(ride)),
});

export default connect(mSTP, mDTP)(Rides);
