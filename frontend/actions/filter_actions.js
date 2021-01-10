import { fetchRides } from "./ride_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (bounds) => ({
  type: UPDATE_FILTER,
  bounds
});

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return dispatch(fetchRides(getState().ui.filterReducer.bound));
  }
}