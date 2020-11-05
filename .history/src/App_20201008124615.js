import React from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>

      <div>
        <Home />
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
