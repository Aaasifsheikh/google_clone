import React from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      
    </Switch>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
