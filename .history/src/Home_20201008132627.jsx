import React from "react";
import Homecss from "./Home.css";
import { NavLink } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
import image from './Image/google-logo.png'
const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/store">Store</NavLink>
        </div>
        <div className="home_headerRight">
          <NavLink to="">Gmail</NavLink>
          <NavLink to="">Images</NavLink>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
      <img src={image}
        <Search />
      </div>
    </div>
  );
};

export default Home;
