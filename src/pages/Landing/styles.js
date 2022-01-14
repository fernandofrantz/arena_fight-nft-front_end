import styled from "styled-components";

export const StyledLanding = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #3d1652;

  img {
    width: 100px;
  }

  .fightToEarn {
    width: 220px;
  }
`;

export const LogoAndButtons = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-top: 50px;

  .preSale,
  .connectWallet {
    width: 80px;
    margin-top: 30px;
  }

  .logo {
    width: 90px;
  }
`;

export const ButtonsBar = styled.div`
  width: 90%;

  margin: 40px 0px 40px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  background-color: #c4c4c450;
  border-radius: 5px;

  .myGym,
  .whitepaper {
    width: 80px;
    height: 20px;
  }

  .playNow {
    width: 90px;
  }
`;
