import React from "react";
import { Pagination } from "@mui/material";

function PaginationComponent({
  productsPerPage,
  totalProducts,
  handlePageChange,
  currentPage,
}) {
  let count = Math.ceil(totalProducts / productsPerPage);
  return (
    <div
      style={{
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pagination
        count={count}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationComponent;
