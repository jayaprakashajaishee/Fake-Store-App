import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productReducer";
import categoriesReducer from "./reducers/categoryReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});
