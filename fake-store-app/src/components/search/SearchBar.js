import React, { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

function SearchBar() {
  const searchBar = useRef(null);
  return (
    <div style={{ margin: "10px", display: "flex" }}>
      <input className="searchBar" placeholder="Search" ref={searchBar}></input>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => console.log(searchBar.current.value)}
      >
        <SearchIcon />
      </IconButton>
      <Button
        variant="text"
        sx={{ color: "white", ":hover": { backgroundColor: "#3C8DAD" } }}
      >
        Clear
      </Button>
    </div>
  );
}

export default SearchBar;
