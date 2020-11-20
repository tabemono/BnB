import * as APIUtil from "../util/ride_api_util";

export const RECEIVE_ALL_RIDES = "RECEIVE_ALL_RIDES";
export const RECEIVE_RIDE = "RECEIVE_RIDE";


export const receiveAllRides = (rides) => ({
  type: RECEIVE_ALL_RIDES,
  rides,
});



export const receiveRide = (ride) => ({
  type: RECEIVE_ride,
  ride,
});



export const fetchRides = () => (dispatch) =>
  APIUtil.fetchRides().then((rides) => dispatch(receiveAllRides(rides)));

export const fetchRide = (rideId) => (dispatch) =>
  APIUtil.fetchRide(rideId).then((ride) => dispatch(receiveRide(ride)));

export const createRide = (ride) => (dispatch) =>
  APIUtil.createRide(ride).then((ride) => dispatch(receiveRide(ride)));

export const updateRide = (ride) => (dispatch) =>
  APIUtil.updateRide(ride).then((ride) => dispatch(receiveRide(ride)));
