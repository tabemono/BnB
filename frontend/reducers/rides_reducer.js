import { RECEIVE_ALL_RIDES, RECEIVE_RIDE } from "../actions/ride_actions";

const ridesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RIDES:
      return action.rides;
    case RECEIVE_RIDE:
      return Object.assign({}, state, { [action.ride.id]: action.ride });

    default:
      return state;
  }
};

export default ridesReducer;
