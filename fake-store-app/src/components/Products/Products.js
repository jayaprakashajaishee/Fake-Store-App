import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { onGetProducts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PaginationComponent from "../Pagination/PaginationComponent";

function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);

  const Products = useSelector((state) => state.products);
  const CategoryFilter = useSelector((state) => state.categoryFilter);
  const search = useSelector((state) => state.search);
  const { loading, error, products } = Products;

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  const categoryFilteredProducts =
    CategoryFilter.length === 0
      ? products
      : products.filter((product) => CategoryFilter.includes(product.category));

  const searchResult = categoryFilteredProducts
    ? categoryFilteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  //Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResult.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => setCurrentPage(value);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="products" style={{ flexGrow: 1 }}>
      {products &&
        currentProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      <PaginationComponent
        productsPerPage={productsPerPage}
        totalProducts={searchResult.length}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Products;
