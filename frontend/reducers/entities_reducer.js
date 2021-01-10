import { combineReducers } from "redux";
import users from "./users_reducer";
import rides from "./rides_reducer";
import { bookingsReducer } from "./bookings_reducer";
import searchReducer from "./search_reducer";

export default combineReducers({
  users,
  rides,
  bookings: bookingsReducer,
  search: searchReducer,
});
