import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
            <NavLink to='/'
        </div>
        <div className="home_headerRight"></div>
      </div>
    </div>
  );
};

export default Home;
