import {
  CATEGORY_FILTER_ADD,
  CATEGORY_FILTER_REMOVE,
  CATEGORY_FILTER_RESET,
} from "../constants";

function categoryFilterReducer(state = [], action) {
  switch (action.type) {
    case CATEGORY_FILTER_ADD:
      return [...state, action.payload];
    case CATEGORY_FILTER_REMOVE:
      return state.filter((category) => category !== action.payload);
    case CATEGORY_FILTER_RESET:
      return [];
    default:
      return state;
  }
}

export default categoryFilterReducer;
