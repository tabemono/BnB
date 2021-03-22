import { fetchRide } from "../../actions/ride_actions";
import { connect } from "react-redux";
import { createBooking } from "../../actions/booking_actions";
import { deleteReview, fetchReviews, fetchReview } from '../../actions/review_actions';
import RideShow from "./ride_show";

const mstp = (state, ownProps) => {
  const ride = state.entities.rides[ownProps.match.params.rideId];
  const owner = !!ride ? state.entities.users[ride.ownerId] : null;
  //possibly put owner of bike later

  return {
    ride,
    owner,
    currentUser: state.session.id,
    type: "show",
  };
};
const mdtp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchReviews: (rideId) => dispatch(fetchReviews(rideId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  createBooking: (booking) => dispatch(createBooking(booking)),
  // fetchReview: (review) => dispatch(fetchReview(review)),
  fetchRide: (rideId) => dispatch(fetchRide(rideId)),
});

export default connect(mstp, mdtp)(RideShow);
