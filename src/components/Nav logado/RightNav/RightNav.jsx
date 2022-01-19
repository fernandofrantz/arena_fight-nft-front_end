import React from 'react';
import { Ul } from "./styles";
import aftcount from '../../../assets/aftcount.png'
import { useNavigate } from 'react-router-dom'
import disconnect from '../../../assets/images/Buttons/disconnect.png'
import bsc from '../../../assets/images/Buttons/BscScan-logo-light.png'


const RightNav = ({ open }) => {

  const navigate = useNavigate()
  const sendTo = (path) => {
    navigate(path)
  }

  return (
    <Ul open={open}>
      <li><img src={aftcount} alt=""/></li>
      <img src={bsc} alt=''></img>
      <img src={disconnect} alt=''></img>
      <li onClick={() => sendTo('/lutador')} className="desktopnav">Fighters</li>
      <li onClick={() => sendTo('/my-gym')} className="desktopnav">My Gym</li>
      <li onClick={() => sendTo('/play')} className="desktopnav last">Play Now</li>
    </Ul>
  )
}

export default RightNav