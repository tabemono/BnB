import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";




export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});


export const clearErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});


export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = ({ review, average_rating, rider }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  rider,
});


export const createReview = (review) => (dispatch) =>
  ReviewAPIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON))
  );


  export const fetchReviews = (rideId) => (dispatch) =>
    ReviewAPIUtil.fetchReviews(rideId).then((reviews) =>
      dispatch(receiveReviews(reviews))
    );