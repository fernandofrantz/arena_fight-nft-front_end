import Bella_44STRcut from "../../assets/images/NFT/Bella/Bella_44STRcut.png";
import Bella_150busdcut from "../../assets/images/NFT/Bella/Bella_150busdcut.png";
import Bella_ThornRosecut from "../../assets/images/NFT/Bella/Bella_ThornRosecut.png";

import Barussi_69STR from "../../assets/images/NFT/Barussi/Barussi_69STRcut.png";
import Barussi_HeavyFist from "../../assets/images/NFT/Barussi/Barussi_HeavyFistcut.png";
import Barussi_250BUSD from "../../assets/images/NFT/Barussi/Barussi_250BUSDcut.png";

import Dimitry_94cut from "../../assets/images/NFT/Dimitry/Dimitry_94cut.png";
import Dimitry_WarTankcut from "../../assets/images/NFT/Dimitry/Dimitry_WarTankcut.png";
import Dimitry_320busdcut from "../../assets/images/NFT/Dimitry/Dimitry_320busdcut.png";

import Ulisses_139STR from "../../assets/images/NFT/Ulisses/Ulisses_139STRcut.png";
import Ulisses_450busd from "../../assets/images/NFT/Ulisses/Ulisses_450busdcut.png";
import Ulisses_DeathDance from "../../assets/images/NFT/Ulisses/Ulisses_DeathDancecut.png";

import Wonakashi_189STR from "../../assets/images/NFT/Wonakashi/Wonakashi_189STR.png";
import Wonakashi_600bus from "../../assets/images/NFT/Wonakashi/Wonakashi_600buscut.png";
import Wonakashi_CalmLotus from "../../assets/images/NFT/Wonakashi/Wonakashi_CalmLotuscut.png";

import trainFighter from "../../assets/images/NFT/tranFighter.png";
import randomStr from "../../assets/images/randomStr.png";
import busd50 from "../../assets/images/busd50.png";

import BuyNow from "../../assets/images/Buttons/BuyNow.png";
import PlayNow from "../../assets/images/Buttons/PlayNow.png";
import PreSaleText from "../../assets/images/Buttons/PreSale.png";
import Logo from "../../assets/images/Logo.png";
import WhitepaperButton from "../../assets/images/Buttons/WhitepaperButton.png";
import BackButton from "../../assets/images/Buttons/BackButton.png";

import { CardPreSale } from "../../components/CardPreSale";
import {
  Bgpresale,
  CardChest,
  PreSalePage,
  SectionNfts,
  StyledBar,
} from "./styles";
import { SocialButtons } from "../../components/SocialButtons";

import { useNavigate } from "react-router-dom";

export const PreSale = () => {
  const navigate = useNavigate();

  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <Bgpresale>
        <PreSalePage>
          <div className="BackDiv">
            <img onClick={() => sendTo("/")} src={BackButton} alt="" />
          </div>
          <StyledBar>
            <div className="divButtons">
              <section className="whitesection">
                <img
                  onClick={() => sendTo("/play")}
                  className="Buttons play"
                  src={PlayNow}
                  alt=""
                ></img>
              </section>
              <img
                onClick={() => sendTo("/")}
                className="logo"
                src={Logo}
                alt=""
              />
              <section className="playsection">
                <a
                  href="https://higor-vidal.gitbook.io/areafight/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="Buttons white"
                    src={WhitepaperButton}
                    alt=""
                  ></img>
                </a>
              </section>
            </div>
          </StyledBar>
          <img className="preSaleText" src={PreSaleText} alt=""></img>
          <SectionNfts>
            <CardPreSale
              cls="6"
              str={randomStr}
              fighter={trainFighter}
              price={busd50}
              buyNow={BuyNow}
            />
            <CardPreSale
              cls="1"
              str={Bella_44STRcut}
              fighter={Bella_ThornRosecut}
              price={Bella_150busdcut}
              buyNow={BuyNow}
            />
            <CardPreSale
              cls="2"
              str={Barussi_69STR}
              fighter={Barussi_HeavyFist}
              price={Barussi_250BUSD}
              buyNow={BuyNow}
            />
            <CardPreSale
              cls="3"
              str={Dimitry_94cut}
              fighter={Dimitry_WarTankcut}
              price={Dimitry_320busdcut}
              buyNow={BuyNow}
            />
            <CardPreSale
              cls="4"
              str={Ulisses_139STR}
              fighter={Ulisses_DeathDance}
              price={Ulisses_450busd}
              buyNow={BuyNow}
            />
            <CardPreSale
              cls="5"
              str={Wonakashi_189STR}
              fighter={Wonakashi_CalmLotus}
              price={Wonakashi_600bus}
              buyNow={BuyNow}
            />
          </SectionNfts>
          <SocialButtons />
        </PreSalePage>
      </Bgpresale>
    </>
  );
};
