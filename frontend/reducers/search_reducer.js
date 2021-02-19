import { RUN_SEARCH } from "../actions/search_actions";

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RUN_SEARCH:
      let newState = Object.assign({}, action.request);
      return newState;

    // return action.request;
    default:
      return state;
  }
};

export default searchReducer;
