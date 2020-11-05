import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Searchcss from "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
const Search = () => {
  const [input, setInput] = useState();
  return (
    <div className="Search">
      <div className="Search_Input">
        <SearchIcon className="Search_inputIcon" />
        <input type="text" value={input} onChange={e=>setInput(e.target.value)
        log} placeholder="Search someting here." />
        <MicIcon className="Search_inputIcon" />
      </div>
      <div className="Search_Buttons">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Search;
