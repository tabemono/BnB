import { RECEIVE_ALL_RIDES, RECEIVE_RIDE } from "../actions/ride_actions";
// import { RECEIVE_BOOKINGS } from "../actions/booking_actions";
import { merge } from "lodash";
const ridesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_RIDES:
      newState = Object.assign({}, action.rides);
      return newState;
    // return action.rides;
    case RECEIVE_RIDE:
      newState = { [action.ride.id]: action.ride };
      return merge({}, state, newState);

    // case RECEIVE_BOOKINGS:
    //   if (!action.rides) action.rides = {};
    //   return action.rides;
    default:
      return state;
  }
};

export default ridesReducer;
