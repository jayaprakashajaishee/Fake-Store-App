import { SET_SEARCH, CLEAR_SEARCH } from "../constants";

function searchReducer(state = "", action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload;
    case CLEAR_SEARCH:
      return "";
    default:
      return state;
  }
}

export default searchReducer;
