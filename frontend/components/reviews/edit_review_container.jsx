// import React from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import {
//   updateReview,
//   fetchReview,
//   deleteReview,
// } from "../../actions/review_actions";
// import { closeModal } from "../../actions/modal_actions";
// import ReviewForm from "./review_form";

// class EditReviewForm extends React.Component {
//   componentDidMount() {
//     this.props.fetchReview(this.props.match.params.reviewId);
//   }

//   render() {
//     return <ReviewForm />;
//   }
// }

// const mSTP = (state) => {
//   const review = state.entities.reviews[review.id];
//   return {
//     review,
//   };
// };

// const mDTP = (dispatch) => ({
//   updateReview: (review) => dispatch(updateReview(review)),
//   fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
//   deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
//   closeModal: () => dispatch(closeModal()),
// });

// export default withRouter(connect(mSTP, mDTP)(EditReviewForm));
