import React from "react";

function ProductCard({ product }) {
  return (
    <div className="productCard">
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
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div style={{ width: "80%", marginLeft: "2%" }}>
        <p style={{ fontSize: 25 }}>{product.title}</p>
        <p>category: {product.category}</p>
        <div style={{ display: "flex" }}>
          <p>{product.rating.rate}</p>
          <p style={{ color: "#3C8DAD" }}>{product.rating.count}</p>
        </div>
        <h1>₹ {product.price}</h1>
      </div>
    </div>
  );
}

export default ProductCard;
