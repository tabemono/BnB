import { RECEIVE_RIDE } from "../actions/ride_actions";

import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS } from "../actions/review_actions";
import { merge } from "lodash";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RIDE:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return merge({}, state, { [review.id]: review });
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default reviewsReducer;
