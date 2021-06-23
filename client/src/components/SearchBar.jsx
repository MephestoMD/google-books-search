import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <form className="form-inline my-2 my-lg-4">
      <input
        className="form-control mr-sm-2"
        type="search"
        name="query"
        placeholder="Search for a book here..."
        aria-label="Search"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </form>
  );
};

export default SearchBar;
