import ReviewIndex from "./review_index";
import { deleteReview, fetchReviews } from "../../actions/review_actions";
import { connect } from "react-redux";

const mSTP = (state, props) => {
  debugger;
  return {
    reviews: Object.values(props.ride.reviews),
  };
};

const mDTP = (dispatch) => ({
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  fetchReviews: (rideId) => dispatch(fetchReviews(rideId)),
});

export default connect(mSTP, mDTP)(ReviewIndex);
