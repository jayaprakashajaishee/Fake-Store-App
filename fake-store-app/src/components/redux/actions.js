import axios from "axios";

import {
  PRODUCTS_REQUEST,
  PRODUCTS_REQUEST_SUCCESS,
  PRODUCTS_REQUEST_FAIL,
  CATEGORIES_REQUEST,
  CATEGORIES_REQUEST_SUCCESS,
  CATEGORIES_REQUEST_FAIL,
  CATEGORY_FILTER_ADD,
  CATEGORY_FILTER_REMOVE,
} from "./constants";

const onGetProducts = () => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  var config = {
    method: "get",
    url: "https://fakestoreapi.com/products",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      dispatch({ type: PRODUCTS_REQUEST_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: PRODUCTS_REQUEST_FAIL, payload: error });
    });
};

const onGetCategories = () => (dispatch) => {
  dispatch({ type: CATEGORIES_REQUEST });

  var config = {
    method: "get",
    url: "https://fakestoreapi.com/products/categories",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      dispatch({ type: CATEGORIES_REQUEST_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: CATEGORIES_REQUEST_FAIL, payload: error });
    });
};

const onApplyCategoryFilter = (category, checked) => (dispatch) => {
  checked
    ? dispatch({ type: CATEGORY_FILTER_ADD, payload: category })
    : dispatch({ type: CATEGORY_FILTER_REMOVE, payload: category });
};

export { onGetProducts, onGetCategories, onApplyCategoryFilter };
