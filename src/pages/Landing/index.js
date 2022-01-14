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

import fightersTxt from "../../assets/images/fightersTxt.png";

import tralveOne from "../../assets/images/travelOne.png";
import tralveTwo from "../../assets/images/travelTwo.png";
import tralveThree from "../../assets/images/travelThree.png";

import roadMapTxt from "../../assets/images/roadMapTxt.png";
import roadMapOne from "../../assets/images/roadMapOne.png";
import roadMapTwo from "../../assets/images/roadMapTwo.png";
import roadMapThree from "../../assets/images/roadMapThree.png";

import meetTheTeamImg from "../../assets/images/meetTheTeam.png";
import higor from "../../assets/images/meetTheTeamHigor.png";
import gui from "../../assets/images/meetTheTeamGui.png";
import luiz from "../../assets/images/meetTheTeamLuiz.png";

import tokeCodeComing from "../../assets/images/tokenCodeComming.png";
import tokenAllocation from "../../assets/images/tokenAllocation.png";

import partners from "../../assets/images/partners.png";
import partnersTxt from "../../assets/images/partnersTxt.png";

import { SocialButtons } from "../../components/SocialButtons";

import {
  ButtonsBar,
  FigthersBox,
  LogoAndButtons,
  MeetTheTeam,
  Partners,
  Platforms,
  RoadMap,
  StyledLanding,
  TokenAllocation,
  TravelingPlaces,
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
              {threeRandomFighters.map((number, index) => {
                return (
                  <img
                    className="fighters"
                    key={index}
                    src={fighters[number]}
                    alt=""
                  ></img>
                );
              })}
            </div>
            <img className="txtfighters" src={fightersTxt} alt=""></img>
          </div>
        </FigthersBox>
        <Platforms>
          <img src={tokeCodeComing} alt="" className="tokenCodeComming"></img>
        </Platforms>
        <TravelingPlaces>
          <img src={tralveThree} alt=""></img>
          <img src={tralveOne} alt=""></img>
          <img src={tralveTwo} alt=""></img>
        </TravelingPlaces>
        <RoadMap>
          <img className="txt" src={roadMapTxt} alt=""></img>
          <img className="road" src={roadMapOne} alt=""></img>
          <img className="road" src={roadMapTwo} alt=""></img>
          <img className="road" src={roadMapThree} alt=""></img>
        </RoadMap>
        <TokenAllocation></TokenAllocation>
        <TokenAllocation>
          <img src={tokenAllocation} alt="" className="tokenAllocation"></img>
        </TokenAllocation>
        <MeetTheTeam>
          <img className="meetTheTeam" src={meetTheTeamImg} alt=""></img>
          <div>
            <img className="personCard" src={higor} alt=""></img>
            <img className="personCard" src={gui} alt=""></img>
            <img className="personCard" src={luiz} alt=""></img>
          </div>
        </MeetTheTeam>
        <Partners>
          <img className="partnersTxt" src={partnersTxt} alt=""></img>
          <img className="partners" src={partners} alt=""></img>
        </Partners>
        <SocialButtons />
      </StyledLanding>
    </>
  );
};
