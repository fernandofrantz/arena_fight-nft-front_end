import { HeaderGame } from "../../components/HeaderGame";
import { SocialButtons } from "../../components/SocialButtons";
import Navbar from "../../components/Nav logado/Nav/Navbar";
import { CountryFights, MainBar, StyledPlay, Bgplay } from "./styles";

import Logo from "../../assets/images/Logo.png";
import MintFighter from "../../assets/images/Buttons/MintFighter.png";
import aftArea from "../../assets/images/aftcounter.png";
import claimButton from "../../assets/images/Buttons/claimbutton.png";

import mexico from "../../assets/images/Countrys/Mexico.png";
import brazil from "../../assets/images/Countrys/Brazil.png";
import argentina from "../../assets/images/Countrys/Argentina.png";
import australia from "../../assets/images/Countrys/Australia.png";
import china from "../../assets/images/Countrys/China.png";
import eua from "../../assets/images/Countrys/EUA.png";
import india from "../../assets/images/Countrys/India.png";
import russia from "../../assets/images/Countrys/Russia.png";
import southAfrica from "../../assets/images/Countrys/SouthAfrica.png";
import spain from "../../assets/images/Countrys/Spain.png";

import BackButton from "../../assets/images/Buttons/BackButton.png";

import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Nav/Nav/Navbar";

export const PlayNow = () => {
  const navigate = useNavigate();

  const sendTo = (path) => {
    navigate(path);
  };

  const claimTokens = () => {};

  return (
    <>
      <Bgplay>
        <Navbar />
        <StyledPlay>
          <CountryFights>
            <img className="country" src={mexico} alt="" />
            <img className="country" src={brazil} alt="" />
            <img className="country" src={argentina} alt="" />
            <img className="country" src={eua} alt="" />
            <img className="country" src={china} alt="" />
            <img className="country" src={australia} alt="" />
            <img className="country" src={russia} alt="" />
            <img className="country" src={southAfrica} alt="" />
            <img className="country" src={india} alt="" />
            <img className="country" src={spain} alt="" />
          </CountryFights>
          <SocialButtons />
        </StyledPlay>
      </Bgplay>
    </>
  );
};
