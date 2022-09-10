import {
  PRODUCTS_REQUEST,
  PRODUCTS_REQUEST_SUCCESS,
  PRODUCTS_REQUEST_FAIL,
} from "../constants";

function productsReducer(state = {}, action) {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { loading: true };
    case PRODUCTS_REQUEST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default productsReducer;
