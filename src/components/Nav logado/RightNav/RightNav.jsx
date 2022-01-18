import React from 'react';
import { Ul } from "./styles";
import aftcount from '../../../assets/aftcount.png'

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><img src={aftcount} alt=""/></li>
      <li>endereço metamask</li>
      <li className="desktopnav">home</li>
      <li className="desktopnav">lutadores</li>
      <li className="desktopnav last">My Gym</li>
    </Ul>
  )
}

export default RightNav