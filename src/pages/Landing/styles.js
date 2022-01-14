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
    width: 220px;
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

  padding-top: 50px;

  .preSale,
  .connectWallet {
    width: 70px;
    margin-top: 30px;
  }

  .logo {
    width: 90px;
  }
`;

export const ButtonsBar = styled.div`
  width: 90%;
  height: 50px;

  margin: 40px 0px 30px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  background-color: #c4c4c450;
  border-radius: 5px;

  .myGym,
  .whitepaper {
    width: 70px;
    height: 20px;
  }

  .playNow {
    width: 100px;
  }
`;

export const FigthersBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  .boxRandomFighters {
    width: 90%;
    padding-top: 10px;
    background-color: #c4c4c450;

    .txtfighters {
      width: 200px;
    }
  }

  .randomFighters {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

    .fighters {
      width: 70px;
    }
  }
`;

export const TravelingPlaces = styled.div`
  width: 90%;
  margin: 50px 0px 0px 0px;
`;

export const RoadMap = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .txt {
    width: 180px;
    margin: 20px 0px 20px 0px;
  }

  .road {
    width: 170px;
    margin: 10px;
  }
`;

export const Platforms = styled.div`
  width: 90%;
  margin: 40px 0px 0px 0px;

  .tokenCodeComming {
    width: 250px;
  }
`;

export const TokenAllocation = styled.div`
  width: 90%;

  margin: 0px 0px 20px 0px;

  .tokenAllocation {
    width: 250px;
  }
`;

export const MeetTheTeam = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  .meetTheTeam {
    width: 250px;
    margin-bottom: 20px;
  }

  .personCard {
    width: 220px;
  }
`;

export const Partners = styled.div`
  width: 90%;

  margin: 20px 0px 0px 0px;
  .partners {
    width: 250px;
  }

  .partnersTxt {
    width: 180px;
  }
`;
