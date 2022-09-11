import React from "react";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";

function RatingComponent({ rate, count }) {
  return (
    <Tooltip title={`${rate} out of 5 from ${count} ratings`} placement="left">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Rating
          name="half-rating-read"
          precision={0.1}
          value={rate}
          readOnly
          sx={{ marginRight: "5px" }}
        />
        <p style={{ color: "#3C8DAD" }}>{count}</p>
      </div>
    </Tooltip>
  );
}

export default RatingComponent;
