import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
const Search = () => {
  return (
    <div className="Search">
      <div className="Search_Input">
        <SearchIcon className="search_inputIcon" />
        <input type="text" name={Aasif placeholder="Search someting here." />
        <MicIcon className="search_inputIcon" />
      </div>
      <div className="search_button">
        <button >Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default Search;
