import React from "react";
import { Nav } from "./styles";
import Burger from "../Burger/Burger";
import logo from "../../../assets/logo.png";

import home from "../../../assets/images/Buttons/homeBtn.png";
import play from "../../../assets/images/Buttons/playNowBtn.png";
import myGym from "../../../assets/images/Buttons/myGymBtn.png";

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
        <div className="buttons">
          <img src={home} alt="" onClick={() => sendTo("/")}></img>
          <img src={play} alt="" onClick={() => sendTo("/play")}></img>
          <img src={myGym} alt="" onClick={() => sendTo("/my-gym")}></img>
        </div>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
