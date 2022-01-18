import React from "react";
import { Ul } from "./styles";
import whitepaper from "../../../assets/images/Buttons/WhitepaperButton.png";
import playNow from "../../../assets/images/Buttons/PlayNow.png";
import { useNavigate } from "react-router-dom";

const RightNav = ({ open }) => {
  const navigate = useNavigate();

  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <Ul open={open}>
      <img onClick={() => sendTo("/play")} src={playNow} alt="" />
      <button>contract</button>
      <a href="https://higor-vidal.gitbook.io/areafight/">
        <img src={whitepaper} alt="" />
      </a>
    </Ul>
  );
};

export default RightNav;
