import React from 'react';
import { Ul } from "./styles";
import aftcount from '../../../assets/aftcount.png'
import { useNavigate } from 'react-router-dom'
import disconnect from '../../../assets/images/Buttons/disconnect.png'
import connect from '../../../assets/images/Buttons/connect.png'
import bsc from '../../../assets/images/Buttons/BscScan-logo-light.png'
import claimButton from "../../../assets/images/Buttons/claimbutton.png";

import mintFighter from '../../../assets/images/Buttons/MintFighter.png'

import hospital from '../../../assets/images/Buttons/hospital.png'

const RightNav = ({ open }) => {

  const navigate = useNavigate()
  const sendTo = (path) => {
    navigate(path)
  }

  return (
    <Ul open={open}>
      
      <li className='divClaim'><img src={aftcount} alt=""/>
      <img
        className="claimButton"
        src={claimButton}
        alt=""
        />
      </li>

      <img className='hospital' src={hospital} alt="" />
      <img className='mintFighter' src={mintFighter} alt="" />
      <img className='conncet' src={connect} alt=''></img>
      <li onClick={() => sendTo('/lutador')} className="desktopnav">Fighters</li>
      <li onClick={() => sendTo('/my-gym')} className="desktopnav">My Gym</li>
      <li onClick={() => sendTo('/play')} className="desktopnav last">Play Now</li>
    </Ul>
  )
}

export default RightNav