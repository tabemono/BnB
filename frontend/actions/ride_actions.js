import * as RideApiUtil from "../util/ride_api_util";
import { setKeyword } from "./keyword_actions";

export const RECEIVE_ALL_RIDES = "RECEIVE_ALL_RIDES";
export const RECEIVE_RIDE = "RECEIVE_RIDE";

export const receiveAllRides = (rides) => ({
  type: RECEIVE_ALL_RIDES,
  rides,
});

export const receiveRide = (ride) => ({
  type: RECEIVE_RIDE,
  ride,
});

export const fetchRides = (bounds) => (dispatch) =>
  RideApiUtil.fetchRides(bounds).then((rides) =>
    dispatch(receiveAllRides(rides))
  );

export const fetchRide = (rideId) => (dispatch) =>
  RideApiUtil.fetchRide(rideId).then((ride) => dispatch(receiveRide(ride)));



export const rideSearch = (keyword) => dispatch => {
  // dispatch(setKeyword[keyword]);
  return RideApiUtil.rideSearch(keyword).then(rides => dispatch(receiveAllRides(rides)))
}
// export const createRide = (ride) => (dispatch) =>
//   APIUtil.createRide(ride).then((ride) => dispatch(receiveRide(ride)));

// export const updateRide = (ride) => (dispatch) =>
//   APIUtil.updateRide(ride).then((ride) => dispatch(receiveRide(ride)));
