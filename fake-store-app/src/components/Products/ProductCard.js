import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RatingComponent from "../Rating/RatingComponent";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="productCard"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          height: "100%",
          width: "20%",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div style={{ width: "80%", marginLeft: "2%" }}>
        <Typography
          sx={{ fontSize: 25, ":hover": { textDecoration: "underline" } }}
        >
          {product.title}
        </Typography>
        <p>category: {product.category}</p>
        <RatingComponent
          rate={product.rating.rate}
          count={product.rating.count}
        />
        <h1>₹ {product.price}</h1>
      </div>
    </Link>
  );
}

export default ProductCard;
