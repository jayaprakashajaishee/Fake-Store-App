import React from "react";
import Categories from "../components/categories/Categories";
import Products from "../components/Products/Products";

function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <Categories />
      </div>
      <div style={{ width: "100%" }}>
        <Products />
      </div>
    </div>
  );
}

export default HomePage;
