import styled from "styled-components";
import background1 from "../../assets/images/bgzin.png";

export const Bg1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background1});
  background-repeat: no-repeat;
  width: 100vw;
  height: 936vh;
  background-position-x: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledLanding = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .fightToEarn {
    width: 80%;
  }

  .firstBg {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .fightToEarn {
      width: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    .fightToEarn {
      width: 50%;
    }
  }

  @media screen and (min-width: 2560px) {
    .fightToEarn {
      width: 40%;
    }
  }
`;

export const LogoAndButtons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding-top: 16%;

  .preSale,
  .connectWallet {
    width: 25%;
    margin-top: 10%;
  }

  .logo {
    width: 33%;
  }

  @media screen and (min-width: 768px) {
    padding-top: 70px;
    .preSale,
    .connectWallet {
      width: 20%;
      margin-top: 10%;
    }

    .logo {
      width: 25%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }

  @media screen and (min-width: 2560px) {
    .preSale,
    .connectWallet {
      width: 15%;
      margin-top: 10%;
    }

    .logo {
      width: 20%;
    }
  }
`;

export const ButtonsBar = styled.div`
  width: 90%;
  height: 50px;

  margin: 50px 0px 50px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  background-color: #c4c4c450;
  border-radius: 5px;

  .myGym,
  .whitepaper {
    width: 26%;
    height: 50%;
  }

  .playNow {
    width: 35%;
  }

  @media screen and (min-width: 375px) {
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    height: 80px;

    .myGym,
    .whitepaper {
      width: 20%;
      height: 50%;
    }

    .playNow {
      width: 27%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }

  @media screen and (min-width: 1440px) {
    height: 100px;

    .myGym,
    .whitepaper {
      width: 18%;
      height: 55%;
    }

    .playNow {
      width: 25%;
    }
  }

  @media screen and (min-width: 2560px) {
    height: 180px;
    .myGym,
    .whitepaper {
      width: 18%;
      height: 55%;
    }

    .playNow {
      width: 25%;
    }
  }
`;

export const FigthersBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .boxRandomFighters {
    width: 90%;
    padding: 20px 0px 10px 0px;
    background-color: #c4c4c450;

    .txtfighters {
      width: 70%;
    }
  }

  .randomFighters {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

    .fighters {
      width: 25%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
    height: 100vh;

    .boxRandomFighters {
      width: 85%;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 65%;
  }
`;

export const Platforms = styled.div`
  width: 90%;
  margin: 40px 0px 0px 0px;

  .tokenCodeComming {
    width: 85%;
  }

  @media screen and (min-width: 768px) {
    .tokenCodeComming {
      width: 80%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }

  @media screen and (min-width: 1440px) {
    width: 75%;
  }

  @media screen and (min-width: 2560px) {
    width: 55%;
  }
`;

export const TravelingPlaces = styled.div`
  width: 90%;
  margin: 50px 0px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 40%;
    }
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 2560px) {
  }
`;

export const RoadMap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .txt {
    width: 62%;
    margin: 20px 0px 20px 0px;
  }

  .road {
    width: 65%;
    margin: 10px;
  }

  @media screen and (min-width: 768px) {
    .cardsRoad {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      width: 45%;
    }

    .txt {
      width: 30%;
      margin: 50px 0px 0px 0px;
    }
  }

  @media screen and (min-width: 1024px) {
    .txt {
      width: 25%;
    }

    .cardsRoad {
      width: 40%;
    }
  }

  @media screen and (min-width: 1440px) {
    .cardsRoad {
      width: 35%;
    }
  }

  @media screen and (min-width: 2560px) {
  }
`;

export const TokenAllocation = styled.div`
  width: 90%;

  margin: 30px 0px 20px 0px;

  .tokenAllocation {
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    .tokenAllocation {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    .tokenAllocation {
      width: 50%;
    }
  }

  @media screen and (min-width: 1440px) {
    .tokenAllocation {
      width: 40%;
    }
  }

  @media screen and (min-width: 2560px) {
  }
`;

export const MeetTheTeam = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  .meetTheTeam {
    width: 90%;
    margin-bottom: 20px;
  }

  .personCard {
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    .meetTheTeam {
      width: 70%;
      margin-bottom: 20px;
    }

    .personCard {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .meetTheTeam {
      width: 50%;
    }

    .personCard {
      width: 30%;
    }
  }

  @media screen and (min-width: 1440px) {
    .meetTheTeam {
      width: 45%;
    }

    .personCard {
      width: 25%;
    }
  }

  @media screen and (min-width: 2560px) {
  }
`;

export const Partners = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 30px 0px 0px 0px;
  .partners {
    width: 80%;
  }

  .partnersTxt {
    width: 60%;
    margin: 0px 0px 10px 0px;
  }

  @media screen and (min-width: 768px) {
    .partners {
      width: 80%;
    }

    .partnersTxt {
      width: 45%;
      margin: 0px 0px 10px 0px;
    }
  }

  @media screen and (min-width: 1024px) {
    .partnersTxt {
      width: 30%;
    }
    .partners {
      width: 70%;
    }
  }

  @media screen and (min-width: 1440px) {
    .partners {
      width: 70%;
    }

    .partnersTxt {
      width: 35%;
      margin: 0px 0px 10px 0px;
    }
  }

  @media screen and (min-width: 2560px) {
  }
`;
