import { fetchRides } from "./ride_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";
export const CLEAR_FILTER = "ClEAR_FILTER";

export const changeFilter = (bounds) => ({
  type: UPDATE_FILTER,
  bounds,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchRides(getState().ui.filters)(dispatch);
};

export const resetFilters = () => (dispatch, getState) => {
  dispatch(clearFilter());
  return fetchRides(getState().ui.filters)(dispatch);
};

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return dispatch(fetchRides(getState().ui.filterReducer.bound));
  };
};
