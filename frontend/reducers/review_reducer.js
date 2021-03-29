import { RECEIVE_RIDE } from "../actions/ride_actions";

import {
  RECEIVE_REVIEW,
  RECEIVE_ALL_REVIEWS,
  REMOVE_REVIEW,
  RECEIVE_REVIEWS,
} from "../actions/review_actions";
import { merge } from "lodash";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RIDE:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return merge({}, state, { [review.id]: review });
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case REMOVE_REVIEW:
      let newState = { ...state };

      delete newState[action.reviewId];
      debugger;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
