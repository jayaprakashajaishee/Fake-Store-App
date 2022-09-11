import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

function ProductPage() {
  const { id } = useParams();
  const Products = useSelector((state) => state.products);
  const { products } = Products;
  let product = products.filter((product) => product.id == id)[0];
  console.log(product);
  return (
    <div style={{ height: "calc(100vh - 60px)", display: "flex" }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt={product.title}
        />
      </div>
      <div style={{ width: "50%" }}>
        <h1>{product.title}</h1>
        <p>category: {product.category}</p>
        <p>{product.description}</p>
        <div style={{ display: "flex" }}>
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
        </div>
        <h1>₹ {product.price}</h1>
        <Button
          variant="contained"
          onClick={() => alert(`you Bought ${product.title} ✅`)}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}

export default ProductPage;
