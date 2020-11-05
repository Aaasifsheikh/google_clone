import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Searchcss from "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
const Search = () => {
  return (
    <div className="Search">
      <div className="Search_Input">
        <SearchIcon className="Search_inputIcon" />
        <input type="text" name="Aasif" placeholder="Search someting here." />
        <MicIcon className="Search_inputIcon" />
      </div>
      <div className="Search_Buttons">
        <button>Google Search</button>
        <button variant="">I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default Search;
