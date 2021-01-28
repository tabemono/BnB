import { RECEIVE_ALL_RIDES, RECEIVE_RIDE } from "../actions/ride_actions";
import { merge } from "lodash";
const ridesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RIDES:
      return action.rides;
    case RECEIVE_RIDE:
      const newState = { [action.ride.id]: action.ride };
      return merge({}, state, newState);

    default:
      return state;
  }
};

export default ridesReducer;
