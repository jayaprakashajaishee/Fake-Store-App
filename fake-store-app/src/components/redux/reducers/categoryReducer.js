import {
  CATEGORIES_REQUEST,
  CATEGORIES_REQUEST_SUCCESS,
  CATEGORIES_REQUEST_FAIL,
} from "../constants";

function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { loading: true };
    case CATEGORIES_REQUEST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORIES_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
