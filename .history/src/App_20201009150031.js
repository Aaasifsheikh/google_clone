import React from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import searchResult from "./searchResult";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/home" />
          <Home />
          <Route exact path="/searchResult" component={searchResult} />
          <search
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
