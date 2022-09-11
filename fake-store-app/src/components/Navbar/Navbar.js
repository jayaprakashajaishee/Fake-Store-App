import React from "react";
import SearchBar from "../search/SearchBar";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 className="homeButton">FAKE STORE</h2>
      </Link>
      <SearchBar />
    </div>
  );
}

export default Navbar;
