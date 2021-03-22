import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

export const receiveReview = ({ review, average_rating, rider }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  rider,
});

export const createReview = (review) => (dispatch) =>
  ReviewApiUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON))
  );

export const updateReview = (review) => (dispatch) => {
  return ReviewsApiUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const fetchReviews = (rideId) => (dispatch) =>
  ReviewApiUtil.fetchReviews(rideId).then((reviews) =>
    dispatch(receiveAllReviews(reviews))
  );

export const fetchReview = (review) => (dispatch) => {
  return ReviewApiUtil.fetchReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const deleteReview = (reviewId) => (dispatch) => {
  return ReviewApiUtil.deleteReview(reviewId).then((review) =>
    dispatch(removeReview(review.id))
  );
};
