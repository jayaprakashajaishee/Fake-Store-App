import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import RatingComponent from "../components/Rating/RatingComponent";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState("loading");
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => {
        setProduct("error");
        console.log(error);
      });
  }, []);
  return product === "loading" ? (
    <div>Loading...</div>
  ) : product === "error" ? (
    <div>Error...</div>
  ) : (
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
        <RatingComponent
          rate={product.rating.rate}
          count={product.rating.count}
        />
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
