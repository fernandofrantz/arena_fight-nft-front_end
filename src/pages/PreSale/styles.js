import styled from "styled-components";
import Background from '../../assets/images/bg#3.jpg';

export const PreSalePage = styled.div`
  width: 100vw;
  height: 100%;

  min-height: 100vh;

  padding-bottom:50px;
/* 
  background-image: url("../../assets/images/bg#3.jpg");
  background-position: center;
  background-size: cover; */

  background-color: #230433;

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
      max-width:120px;
    }
  }

  @media screen and (min-width: 768px) {
    .preSaleText {
      margin-bottom: 40px
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

  }
  
  .Buttons {
    height: 30px;
  }

  @media screen and (min-width:768px) {
    width: 70%;

    .divButtons {
      .whitesection, .playsection {
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
      .whitesection, .playsection {
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
      .whitesection, .playsection {
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
      .whitesection, .playsection {
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

  @media screen and (min-width: 768px) {
    
  }
`;

