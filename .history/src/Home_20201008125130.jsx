import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/store'>Store</NavLink>
        </div>
        <div className="home_headerRight">
        <NavLink to="" >Gmail</NavLink>

        </div>
      </div>
    </div>
  );
};

export default Home;
