import { CATEGORY_FILTER_ADD, CATEGORY_FILTER_REMOVE } from "../constants";

function categoryFilterReducer(state = [], action) {
  switch (action.type) {
    case CATEGORY_FILTER_ADD:
      return [...state, action.payload];
    case CATEGORY_FILTER_REMOVE:
      return state.filter((category) => category !== action.payload);
    default:
      return state;
  }
}

export default categoryFilterReducer;
