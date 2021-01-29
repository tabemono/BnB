import { fetchRides } from "./ride_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

// const changeFilter = (filter, value) => ({
//   type: UPDATE_FILTER,
//   filter,
//   value
// });

// export const updateFilter = (filter, value) => {
//   return (dispatch, getState) => {
//     dispatch(changeFilter(filter, value));
//     return (fetchRides(getState().ui.filterReducer.bound));
//   };
// };

const changeBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds,
});

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return dispatch(fetchRides(getState().ui.filterReducer.bound));
  };
};
