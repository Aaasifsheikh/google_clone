import React from 'react';
import Home from './Home';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
imp

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
