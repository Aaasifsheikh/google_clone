import React from "react";
import Homecss from "./Home.css";
import Se
import { NavLink } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
import image from "./Image/2WhatsApp Image 2020-10-08 at 3.09.05 PM.jpeg";
const Home = (props) => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <NavLink to="/about">(props.name)</NavLink>
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
        <img src={image} alt="" />
      </div>
      <div className="home_inputContainer">
        <Search />
      </div>
    </div>
  );
};

export default Home;
