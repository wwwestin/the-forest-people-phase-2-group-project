import React from "react";


function Search({onSearch, onChange, search}) {



  return (
    <form className="searchbar" onSubmit={(e) => onSearch(e)}>
      <input
        type="text"
        id="search"
        placeholder="search parks"
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;