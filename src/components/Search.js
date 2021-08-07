import React from "react";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Search Notes..."
      />
    </div>
  );
}

export default Search;
