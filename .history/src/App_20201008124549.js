import React from 'react';
import Home from './Home';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'rea'

function App() {
  return (
    <BrowserRouter>

    <div>
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
