import { combineReducers } from "redux";
import users from "./users_reducer";
import rides from "./rides_reducer";
export default combineReducers({
  users,
  rides,
});
