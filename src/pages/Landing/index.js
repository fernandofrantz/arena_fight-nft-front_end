import preSale from "../../assets/images/Buttons/PreSale.png";
import logo from "../../assets/images/Logo.png";
import connectWallet from "../../assets/images/Buttons/connectWalletRound.png";
import myGym from "../../assets/images/Buttons/myGym.png";
import playNow from "../../assets/images/Buttons/PlayNow.png";
import whitepaper from "../../assets/images/Buttons/WhitepaperButton.png";
import fightToEarn from "../../assets/images/Buttons/fightToEarn.png";

import { ButtonsBar, LogoAndButtons, StyledLanding } from "./styles";
import { HeaderLanding } from "../../components/HeaderLanding";

export const Landing = () => {
  return (
    <>
      <HeaderLanding />
      <StyledLanding>
        <LogoAndButtons>
          <img className="preSale" src={preSale} alt=""></img>
          <img className="logo" src={logo} alt=""></img>
          <img className="connectWallet" src={connectWallet} alt=""></img>
        </LogoAndButtons>
        <ButtonsBar>
          <img className="myGym" src={myGym} alt=""></img>
          <img className="playNow" src={playNow} alt=""></img>
          <img className="whitepaper" src={whitepaper} alt=""></img>
        </ButtonsBar>
        <div>
          <img className="fightToEarn" src={fightToEarn} alt=""></img>
        </div>
        <div className="boxRandomFighters">
          <div className="randomFighters">
            <img src="" alt=""></img>
            <img src="" alt=""></img>
            <img src="" alt=""></img>
          </div>
          <img src="" alt=""></img>
        </div>
      </StyledLanding>
    </>
  );
};
