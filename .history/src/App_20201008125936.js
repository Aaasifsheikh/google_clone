import React from "react";
import Home from "./Home";
import Homecss from "./Home.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
        <Route path="/home" />
          <Home />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
