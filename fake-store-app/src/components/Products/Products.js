import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { onGetProducts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);

  const Products = useSelector((state) => state.products);
  const CategoryFilter = useSelector((state) => state.categoryFilter);
  const search = useSelector((state) => state.search);
  const { loading, error, products } = Products;

  const categoryFilteredProducts =
    CategoryFilter.length === 0
      ? products
      : products.filter((product) => CategoryFilter.includes(product.category));

  const searchResult = categoryFilteredProducts
    ? categoryFilteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="products" style={{ flexGrow: 1 }}>
      {products &&
        searchResult.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
    </div>
  );
}

export default Products;
