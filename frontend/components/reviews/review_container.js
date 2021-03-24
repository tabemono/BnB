import {
  createReview,
  fetchReviews,
  deleteReview,
} from "../../actions/review_actions";
import { fetchRide } from "../../actions/ride_actions";
import ReviewForm from "./review_form";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/review_actions";

const mSTP = (state, ownProps) => ({
  errors: state.errors.review,
  review: {
    body: "",
    rider_id: state.session.id,
    ride_id: ownProps.ride.id,
    rating: "",
  },
});

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchReviews: (id) => dispatch(fetchReviews(id)),
  fetchRide: (rideId) => dispatch(fetchRide(rideId)),
  openModal: () => dispatch(openModal("login")),
  clearErrors: () => dispatch(clearErrors()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(mSTP, mDTP)(ReviewForm);
