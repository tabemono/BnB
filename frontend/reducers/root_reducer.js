import { combineReducers } from "redux";
import modal from "../components/modal/modal";

import entities from "./entities_reducer";
import errors from "./errors_reducer";
import session from "./session_reducer";
import ui from "./ui_reducer";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
});

export default rootReducer;
