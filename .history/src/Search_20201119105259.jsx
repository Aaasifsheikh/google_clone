import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import searchResult from "./searchResult";
import InstagramEmbed from 'react-instagram-embed';


const Search = (hideButtons = false) => {
  const [input, setInput] = useState();
  const history = useHistory();
  const searchPage = (e) => {
    console.log(input);
    history.push("/searchResult");
    e.preventDefault();
  };
  return (
    <div className="aasif">
      <form className="Search">
        <div className="Search_Input">
          <SearchIcon className="Search_inputIcon" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            placeholder="Search something here..."
          />
          <MicIcon className="Search_inputIcon" />
        </div>
        {!hideButtons ? (
          <div className="Search_Buttons">
            <Button type="submit" onClick={searchPage} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="Search_Buttons">
            <Button
              type="submit"
              onClick={searchPage}
              variant="outlined"
              className="search_hiddenButton"
            >
              Google Search
            </Button>
            <Button variant="outlined" className="search_hiddenButton">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
      <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        clientAccessToken='123|456'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript



    </div>
  );
};

export default Search;
