import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productReducer";
import categoriesReducer from "./reducers/categoryReducer";
import categoryFilterReducer from "./reducers/categoryFilterReducer";
import searchReducer from "./reducers/searchReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    categoryFilter: categoryFilterReducer,
    search: searchReducer,
  },
});
