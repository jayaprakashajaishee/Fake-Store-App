import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";

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
        <Tooltip
          title={`${product.rating.rate} out of 5 from ${product.rating.count} ratings`}
          placement="left"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="half-rating-read"
              precision={0.1}
              value={product.rating.rate}
              readOnly
              sx={{ marginRight: "5px" }}
            />
            <p style={{ color: "#3C8DAD" }}>{product.rating.count}</p>
          </div>
        </Tooltip>
        <h1>₹ {product.price}</h1>
      </div>
    </Link>
  );
}

export default ProductCard;
