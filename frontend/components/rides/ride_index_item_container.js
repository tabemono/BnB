import { connect } from "react-redux";
import { fetchRides, createRide, updateRide } from "../../actions/ride_actions";
import RideIndexItem from "./ride_index_item_container";

const mSTP = (state) => ({
  rides: Object.values(state.entities.rides),
});

const mDTP = (dispatch) => ({
  fetchRides: () => dispatch(fetchRides()),
  // fetchRide: (rideId) => dispatch(fetchRide(rideId)),
  // createRide: (ride) => dispatch(createRide(ride)),
  // updateRide: (ride) => dispatch(updateRide(ride)),
});

export default connect(mSTP, mDTP)(RideIndexItem);
