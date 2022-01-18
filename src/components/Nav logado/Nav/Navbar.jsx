import React from 'react';
import { Nav } from "./styles";
import Burger from '../Burger/Burger';
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <div className="menu">
      <img className="logo" src={logo} alt=''/>
      <p>home</p>
      <p>lutadores</p>
      <p>MyGym</p>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar