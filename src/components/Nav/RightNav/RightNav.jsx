import React from 'react';
import { Ul } from "./styles";
import whitepaper from "../../../assets/images/Buttons/WhitepaperButton.png";
import playNow from "../../../assets/images/Buttons/PlayNow.png";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <img src={playNow} alt=''/>
      <button>contract</button>
      <img src={whitepaper} alt=''/>
    </Ul>
  )
}

export default RightNav