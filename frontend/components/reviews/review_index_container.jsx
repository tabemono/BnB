import ReviewIndex from "./review_index";
import { deleteReview, fetchReviews } from "../../actions/review_actions";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => {
  debugger;
  if (ownProps.ride.reviews) {
    return {
      reviews: Object.values(ownProps.ride.reviews),
    };
  } else {
    return {};
  }
};

const mDTP = (dispatch) => ({
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  fetchReviews: (rideId) => dispatch(fetchReviews(rideId)),
});

export default connect(mSTP, mDTP)(ReviewIndex);
