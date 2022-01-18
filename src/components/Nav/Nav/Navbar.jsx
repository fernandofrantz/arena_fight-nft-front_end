import React from "react";
import { Nav } from "./styles";
import Burger from "../Burger/Burger";
import logo from "../../../assets/images/Logo.png";

export const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
