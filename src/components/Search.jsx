import React from "react";
import { useDispatch } from "react-redux";
import { updateSearchText } from "../features/college/collegeSlice";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <h1>Search Colleges</h1>
      <input
        onChange={(e) => dispatch(updateSearchText(e.target.value))}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
