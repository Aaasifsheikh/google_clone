import React from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import searchResult from './searchResult';

function App() {
  return (
    <BrowserRouter>
        <React.Fragment>
      <Switch>
        <Route path="/home" />
          <Home />
          <Route path="/searchResult" component={searchResult} />
      </Switch>
        </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
