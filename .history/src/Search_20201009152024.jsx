import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Searchcss from "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import searchResult from "./searchResult";

const Search = (hideButtons = false) => {
  const [input, setInput] = useState();
  const history = useHistory();
  const search = () => {
    console.log(input);
    history.push("/searchResult");
  };
  return (
    <form className="Search">
      <div className="Search_Input">
        <SearchIcon className="Search_inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search someting here."
        />
        <MicIcon className="Search_inputIcon" />
      </div>
      {!hideButtons ? (
        <div className="Search_Buttons">
          <Button type= onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="Search_Buttons">
          <Button
            onClick={search}
            variant="outlined"
            className="search_hiddenButton"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search_hiddenButton">
            Google Search>I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
