import styled from "styled-components";

export const StyledLanding = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #3d1652;

  .fightToEarn {
    width: 80%;
  }

  .firstBg {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

export const FigthersBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

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
`;

export const Platforms = styled.div`
  width: 90%;
  margin: 40px 0px 0px 0px;

  .tokenCodeComming {
    width: 85%;
  }
`;

export const TravelingPlaces = styled.div`
  width: 90%;
  margin: 50px 0px 0px 0px;

  img {
    width: 90%;
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
`;

export const TokenAllocation = styled.div`
  width: 90%;

  margin: 0px 0px 20px 0px;

  .tokenAllocation {
    width: 90%;
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
`;

export const Partners = styled.div`
  width: 90%;

  margin: 30px 0px 0px 0px;
  .partners {
    width: 80%;
    margin: 0px 0px 50px 0px;
  }

  .partnersTxt {
    width: 60%;
    margin: 0px 0px 10px 0px;
  }
`;
