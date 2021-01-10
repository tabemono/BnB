import * as APIUtil from "../util/ride_api_util";

export const RECEIVE_ALL_RIDES = "RECEIVE_ALL_RIDES";
export const RECEIVE_RIDE = "RECEIVE_RIDE";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveAllRides = (rides) => ({
  type: RECEIVE_ALL_RIDES,
  rides,
});

export const receiveRide = (ride) => ({
  type: RECEIVE_RIDE,
  ride,
});

export const fetchRides = (filters) => (dispatch) =>
  APIUtil.fetchRides(filters).then((rides) => dispatch(receiveAllRides(rides)));

export const fetchRide = (rideId) => (dispatch) =>
  APIUtil.fetchRide(rideId).then((ride) => dispatch(receiveRide(ride)));

export const createRide = (ride) => (dispatch) =>
  APIUtil.createRide(ride).then((ride) => dispatch(receiveRide(ride)));

export const updateRide = (ride) => (dispatch) =>
  APIUtil.updateRide(ride).then((ride) => dispatch(receiveRide(ride)));

export const fetchSearch = (query) => (dispatch) =>
  APIUtil.fetchSearch(query).then((result) => dispatch(receiveSearch(result)));
