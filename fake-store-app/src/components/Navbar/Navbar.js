import React from "react";
import SearchBar from "../search/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCategory } from "../redux/actions";
function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        onClick={() => dispatch(resetCategory())}
      >
        <h2 className="homeButton">FAKE STORE</h2>
      </Link>
      <SearchBar />
    </div>
  );
}

export default Navbar;
