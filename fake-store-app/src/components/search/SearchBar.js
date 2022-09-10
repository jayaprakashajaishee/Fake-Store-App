import React, { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { onSearch, onClearSearch } from "../redux/actions";

function SearchBar() {
  const searchBar = useRef(null);
  const dispatch = useDispatch();
  const handleClear = () => {
    searchBar.current.value = "";
    dispatch(onClearSearch());
  };
  return (
    <div style={{ margin: "10px", display: "flex" }}>
      <input className="searchBar" placeholder="Search" ref={searchBar}></input>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => dispatch(onSearch(searchBar.current.value))}
      >
        <SearchIcon />
      </IconButton>
      <Button
        variant="text"
        sx={{ color: "white", ":hover": { backgroundColor: "#3C8DAD" } }}
        onClick={handleClear}
      >
        Clear
      </Button>
    </div>
  );
}

export default SearchBar;
