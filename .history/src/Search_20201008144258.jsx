import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
const Search = () => {
  return (
    <div className="Search">
      <div className="Search_Input">
        <SearchIcon />
        <input />
        <MicIcon />
      </div>
    </div>
  );
};

export default Search;
