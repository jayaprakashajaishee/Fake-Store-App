import React from "react";
import SearchBar from "../search/SearchBar";

function Navbar() {
  return (
    <div className="navbar">
      <h2 style={{ marginLeft: "20px" }}>FAKE STORE</h2>
      <SearchBar />
    </div>
  );
}

export default Navbar;
