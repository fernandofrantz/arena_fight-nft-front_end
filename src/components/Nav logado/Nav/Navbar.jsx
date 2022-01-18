import React from "react";
import { Nav } from "./styles";
import Burger from "../Burger/Burger";
import logo from "../../../assets/logo.png";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <Nav>
      <div className="menu">
        <img className="logo" src={logo} alt="" />
        <p onClick={() => sendTo("/")}>Home</p>
        <p onClick={() => sendTo("/play")}>Play Now</p>
        <p onClick={() => sendTo("/my-gym")}>My Gym</p>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
