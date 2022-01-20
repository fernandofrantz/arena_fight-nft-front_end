import React from "react";
import { Ul } from "./styles";
import aftcount from "../../../assets/aftcount.png";
import { useNavigate } from "react-router-dom";
import disconnect from "../../../assets/images/Buttons/disconnect.png";
import connect from "../../../assets/images/Buttons/connect.png";
import bsc from "../../../assets/images/Buttons/BscScan-logo-light.png";
import claimButton from "../../../assets/images/Buttons/claimbutton.png";

import myGym from "../../../assets/images/Buttons/myGym.png";
import playNow from "../../../assets/images/Buttons/PlayNow.png";

const RightNav = ({ open }) => {
  const navigate = useNavigate();
  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <Ul open={open}>
      <li className="divClaim">
        <img className="aftcounter" src={aftcount} alt="" />
        <img className="claimButton" src={claimButton} alt="" />
      </li>

      <img className="btn conncet" src={connect} alt=""></img>
      <li onClick={() => sendTo("/my-gym")} className="btn desktopnav">
        <img className="btn" src={myGym} alt=""></img>
      </li>
      <li onClick={() => sendTo("/play")} className=" desktopnav last">
        <img className="btn" src={playNow} alt=""></img>
      </li>
    </Ul>
  );
};

export default RightNav;
