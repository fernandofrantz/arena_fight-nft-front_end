import styled from "styled-components";
import background1 from "../../assets/images/bgzin.png";
import box from "../../assets/images/boxzinha.png";

export const Bg1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-image: url(${background1});
  background-repeat: no-repeat;
  width: 100vw;
  background-position-x: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledLanding = styled.div`
  max-width: 100vw;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .fightToEarn {
    width: 90%;
  }

  .firstBg {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .preSale {
    width: 70%;
  }

  .menuExternal {
    width: 100vw;
    height: 30px;
    display: flex;
    justify-content: flex-end;

    .menu {
      width: 40px;
      height: 40px;
      background-color: black;

      border-radius: 50px;

      z-index: 1;

      margin: 10px 10px 0px 0px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .bar {
        width: 60%;
        height: 2px;
        background-color: whitesmoke;
        border-radius: 20px;

        margin: 0px 0px 5px 0px;
      }
    }
  }

  .header {
    width: 100vw;
    height: 100%;
    position: absolute;

    top: 0;
    right: 0;
    z-index: 1;
    transition: 1000ms;

    div {
      transition: 1000ms;
      width: 60%;
      height: 100%;
      float: right;
      background-color: lightblue;

      display: flex;
      flex-direction: column;
      align-items: center;

      .white {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        width: 80%;
        height: 50px;
      }

      .play {
        width: 50%;
      }

      .backButton {
        width: 30%;
      }

      img {
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .fightToEarn {
      width: 70%;
    }

    .preSale {
      width: 45%;
    }
  }

  @media screen and (min-width: 1024px) {
    .fightToEarn {
      width: 50%;
    }
  }

  @media screen and (min-width: 2560px) {
    .fightToEarn {
      width: 70%;
    }
  }
`;

export const LogoAndButtons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .logo {
    width: 70%;
  }

  @media screen and (min-width: 768px) {
    padding-top: 70px;
    .preSale,
    .connectWallet {
      width: 20%;
      margin-top: 10%;
    }

    .logo {
      width: 30%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
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
    height: 200px;
    div {
      width: 90%;
      .fightToEarn {
        width: 250%;
      }
    }
  }
`;

export const BoxFighter = styled.div``;

export const FigthersBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${box});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  width: 80%;
  height: 150px;

  margin: 40px 0px 0px 0px;

  .boxRandomFighters {
    .randomFighters {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .fighters {
        width: 25%;
      }
    }
    .txtfighters {
      width: 60%;
    }
  }

  @media screen and (min-width: 375px) {
    .boxRandomFighters {
      .randomFighters {
        .fighters {
          width: 21%;
        }
      }
      .txtfighters {
        width: 55%;
      }
    }
  }

  @media screen and (min-width: 425px) {
    height: 180px;
    .boxRandomFighters {
      .randomFighters {
        .fighters {
          width: 22%;
        }
      }
      .txtfighters {
        width: 60%;
      }
    }
  }

  @media screen and (min-width: 480px) {
    height: 150px;
    .boxRandomFighters {
      .randomFighters {
        .fighters {
          width: 20%;
        }
      }
      .txtfighters {
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 260px;
    .boxRandomFighters {
      .randomFighters {
        .fighters {
          width: 23%;
        }
      }
      .txtfighters {
        width: 60%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 250px;
    .boxRandomFighters {
      .randomFighters {
        .fighters {
          width: 24%;
        }
      }
      .txtfighters {
        width: 60%;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    height: 380px;
    .boxRandomFighters {
      .randomFighters {
        .fighters {
          width: 35%;
        }
      }
      .txtfighters {
        width: 85%;
      }
    }
  }

  @media screen and (min-width: 2560px) {
    height: 480px;
    .boxRandomFighters {
      .randomFighters {
        .fighters {
          width: 200px;
        }
      }
      .txtfighters {
        width: 100%;
      }
    }
  }
`;

export const Platforms = styled.div`
  width: 70%;
  margin: 40px 0px 0px 0px;

  .tokenCodeComming {
    width: 85%;
  }

  @media screen and (min-width: 768px) {
    .tokenCodeComming {
      width: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 45%;
  }

  @media screen and (min-width: 1440px) {
    width: 55%;
  }

  @media screen and (min-width: 2560px) {
    width: 40%;
  }
`;

export const TravelingPlaces = styled.div`
  width: 70%;
  margin: 30px 0px 0px 0px;

  display: flex;
  flex-direction: row;
  align-items: bottom;
  justify-content: center;

  img {
    width: 35%;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 30%;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 30%;
    }
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 2560px) {
    img {
      width: 22%;
    }
  }
`;

export const RoadMap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
  }

  @media screen and (min-width: 425px) {
    img {
      width: 85%;
    }
  }

  @media screen and (min-width: 768px) {
    img {
      width: 75%;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 55%;
    }
  }

  @media screen and (min-width: 1440px) {
    img {
      width: 65%;
    }
  }

  @media screen and (min-width: 2560px) {
    img {
      width: 55%;
    }
  }
`;

export const TokenAllocation = styled.div`
  width: 80%;

  margin: 30px 0px 20px 0px;

  .tokenAllocation {
    width: 60%;
  }

  @media screen and (min-width: 425px) {
    .tokenAllocation {
      width: 65%;
    }
  }

  @media screen and (min-width: 768px) {
    .tokenAllocation {
      width: 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    .tokenAllocation {
      width: 40%;
    }
  }

  @media screen and (min-width: 1440px) {
    .tokenAllocation {
      width: 35%;
    }
  }

  @media screen and (min-width: 2560px) {
    .tokenAllocation {
      width: 30%;
    }
  }
`;

export const MeetTheTeam = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  .meetTheTeam {
    width: 70%;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 90%;

    .personCard {
      width: 30%;
    }
  }

  @media screen and (min-width: 425px) {
    div {
      .personCard {
        width: 35%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .meetTheTeam {
      width: 50%;
      margin-bottom: 20px;
    }
    div {
      .personCard {
        width: 30%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .personCard {
        width: 25%;
      }
    }

    .meetTheTeam {
      width: 35%;
    }
  }

  @media screen and (min-width: 1440px) {
    .meetTheTeam {
      width: 35%;
    }
    div {
      .personCard {
        width: 25%;
      }
    }
  }

  @media screen and (min-width: 2560px) {
    .meetTheTeam {
      width: 30%;
    }

    div {
      .personCard {
        width: 20%;
      }
    }
  }
`;

export const Partners = styled.div`
  width: 80%;

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
      width: 70%;
    }

    .partnersTxt {
      width: 35%;
      margin: 0px 0px 10px 0px;
    }
  }

  @media screen and (min-width: 1024px) {
    .partnersTxt {
      width: 25%;
    }
    .partners {
      width: 60%;
    }
  }

  @media screen and (min-width: 1440px) {
    .partners {
      width: 60%;
    }

    .partnersTxt {
      width: 35%;
      margin: 0px 0px 10px 0px;
    }
  }

  @media screen and (min-width: 2560px) {
    .partners {
      width: 50%;
    }

    .partnersTxt {
      width: 30%;
      margin: 0px 0px 10px 0px;
    }
  }
`;
