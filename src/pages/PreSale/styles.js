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

  background-color: #c9c9;

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
    width: 90%;
    max-width: 450px;
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

  @media screen and (min-width: 1024px) {
    .BackDiv {
      margin-top: 10px;
      img {
        max-width: 150px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .BackDiv {
      margin-top: 30px;
      img {
        max-width: 200px;
      }
    }
  }


`;

export const StyledBar = styled.div`
  width: 95%;
  height: 50px;
  padding: 10px;

  background-color: #FFF;
  border-radius: 5px;

  margin-top: 20px;
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
      width: 35%;
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
  
  .Logo {
    height: 70px;
  }

  .Buttons {
    height: 30px;
  }

  @media screen and (min-width: 768px) {
    height: 100px;
    padding: 20px;

  }

  @media screen and (min-width: 1024px) {
      height: 130px;
      padding: 30px;
  }

  @media screen and (min-width: 1024px) {
      height: 130px;
      padding: 30px;
  }

  @media screen and (min-width: 1440px) {
      height: 160px;
      padding: 50px;
      margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
      height: 200px;
      padding: 130px;
      margin-top: 150px;
  }
`;



export const SectionNfts = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    margin: 0px; 
  }


`;

