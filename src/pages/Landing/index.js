import preSale from "../../assets/images/Buttons/PreSale.png";
import logo from "../../assets/images/Logo.png";
import connectWallet from "../../assets/images/Buttons/connectWalletRound.png";
import myGym from "../../assets/images/Buttons/myGym.png";
import playNow from "../../assets/images/Buttons/PlayNow.png";
import whitepaper from "../../assets/images/Buttons/WhitepaperButton.png";
import fightToEarn from "../../assets/images/Buttons/fightToEarn.png";

import Ulisses_DeathDance from "../../assets/images/NFT/Ulisses/Ulisses_DeathDancecut.png";
import Wonakashi_CalmLotus from "../../assets/images/NFT/Wonakashi/Wonakashi_CalmLotuscut.png";
import Bella_ThornRosecut from "../../assets/images/NFT/Bella/Bella_ThornRosecut.png";
import Dimitry_WarTankcut from "../../assets/images/NFT/Dimitry/Dimitry_WarTankcut.png";
import Barussi_HeavyFist from "../../assets/images/NFT/Barussi/Barussi_HeavyFistcut.png";

import {
  ButtonsBar,
  FigthersBox,
  LogoAndButtons,
  StyledLanding,
} from "./styles";
import { HeaderLanding } from "../../components/HeaderLanding";

import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  const sendTo = (path) => {
    navigate(path);
  };

  const fighters = [
    Ulisses_DeathDance,
    Wonakashi_CalmLotus,
    Bella_ThornRosecut,
    Dimitry_WarTankcut,
    Barussi_HeavyFist,
  ];

  let threeRandomFighters = [];
  const sortThreeDifferentFighters = () => {
    for (let counter = 0; counter !== 3; counter) {
      let number = Math.floor(Math.random() * 5);
      if (threeRandomFighters.find((el) => el === number) === undefined) {
        threeRandomFighters.push(number);
      }
      if (threeRandomFighters.length === 3) {
        counter = 3;
      }
    }
    console.log(threeRandomFighters);
  };
  sortThreeDifferentFighters();

  return (
    <>
      <HeaderLanding />
      <StyledLanding>
        <div className="firstBg">
          <LogoAndButtons>
            <img
              onClick={() => sendTo("/pre-sale")}
              className="preSale"
              src={preSale}
              alt=""
            ></img>
            <img className="logo" src={logo} alt=""></img>
            <img className="connectWallet" src={connectWallet} alt=""></img>
          </LogoAndButtons>
          <ButtonsBar>
            <img className="myGym" src={myGym} alt=""></img>
            <img
              onClick={() => sendTo("/play")}
              className="playNow"
              src={playNow}
              alt=""
            ></img>
            <img className="whitepaper" src={whitepaper} alt=""></img>
          </ButtonsBar>
          <div>
            <img className="fightToEarn" src={fightToEarn} alt=""></img>
          </div>
        </div>
        <FigthersBox className="secondBg">
          <div className="boxRandomFighters">
            <div className="randomFighters">
              {threeRandomFighters.map((number) => {
                return (
                  <img
                    style={{ width: "100px" }}
                    src={fighters[number]}
                    alt=""
                  ></img>
                );
              })}
            </div>
            <img src="" alt=""></img>
          </div>
        </FigthersBox>
      </StyledLanding>
    </>
  );
};
