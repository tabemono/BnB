import { combineReducers } from "redux";
import modal from "./modal_reducers";
import filters from "./filter_reducer";
import keyword from "./keyword_search_reducer";

export default combineReducers({
  modal,
  filters,
  keyword,
});
