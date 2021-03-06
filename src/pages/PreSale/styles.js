import styled from "styled-components";
import background from "../../assets/images/bg72.webp";

export const Bgpresale = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  width: 100vw;
  height: 100%;
  background-position-x: center;
  background-size: cover;
`;

export const PreSalePage = styled.div`
  height: 100%;

  min-height: 100vh;

  padding-bottom: 50px;

  .div {
    background: url(Background);
    background-position: center;
    background-size: cover;
  }

  background-image: url(Background);
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  .preSaleText {
    width: 60%;
    max-width: 400px;
  }

  .BackDiv {
    width: 100%;
    display: flex;

    img {
      width: 25%;
      align-items: flex-start;
      margin-top: 10px;
      max-width: 120px;
    }
  }
  .BackDiv img:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .preSaleText {
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    .preSaleText {
      max-width: 550px;
    }
  }
`;

export const StyledBar = styled.div`
  width: 95%;
  height: 50px;
  padding: 10px;

  background-color: #d4d4d460;
  border-radius: 5px;

  margin: 50px 0px 0px 0px;
  margin-bottom: 15%;

  .divButtons {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    height: 100%;
    width: 100%;

    .logo {
      width: 30%;
      z-index: 1;
    }
    .logo:hover {
      cursor: pointer;
    }

    .whitesection {
      width: 40%;
      height: auto;
    }

    .playsection {
      width: 40%;
      height: auto;
    }

    .white {
      width: 100%;
      height: 100%;
    }
    .play {
      width: 100%;
      height: 100%;
    }
    .play:hover {
      cursor: pointer;
    }
  }

  .Buttons {
    height: 30px;
  }

  @media screen and (min-width: 768px) {
    width: 70%;

    .divButtons {
      .whitesection,
      .playsection {
        width: 25%;
      }

      .logo {
        width: 150px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 70px;

    margin: 10px 0px 80px 0px;
    .divButtons {
      .whitesection,
      .playsection {
        width: 20%;
      }
      .logo {
        width: 180px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    height: 90px;

    margin: 40px 0px 120px 0px;
    .divButtons {
      .whitesection,
      .playsection {
        width: 25%;
      }
      .logo {
        width: 220px;
      }
    }
  }

  @media screen and (min-width: 2560px) {
    height: 120px;

    margin: 70px 0px 150px 0px;
    .divButtons {
      .whitesection,
      .playsection {
        width: 20%;
      }
      .logo {
        width: 320px;
      }
    }
  }
`;

export const SectionNfts = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: auto;

  img {
    margin: 0px;
  }
`;

export const CardChest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 200px;

  margin: 50px 25px 0px 25px;

  img {
    width: 150px;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 170px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 50px 50px 0px 25px;

    img {
      width: 220px;
    }
  }

  @media screen and (min-width: 2560px) {
    margin: 50px 50px -50px 25px;

    img {
      width: 260px;
    }
  }
`;
