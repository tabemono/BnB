import { combineReducers } from "redux";
import users from "./users_reducer";
import rides from "./rides_reducer";
import bookings from "./bookings_reducer";

export default combineReducers({
  users,
  rides,
  bookings,
});
