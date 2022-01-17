import styled from "styled-components";
import fundo from "../../assets/boxzinha.png";

export const Container = styled.div`
  position: relative;
  background: url(${fundo});
  border: none;
  background-color: Transparent;
  background-size: cover;
  background-position-x: center;
  width: 90%;
  min-width: 300px;
  min-height: 200px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    min-height: 230px;
  }
  @media screen and (min-width: 425px) {
    min-height: 270px;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    min-height: 320px;
    max-height: 350px;
  }
  @media screen and (min-width: 1024px) {
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1920px) {
    min-height: 450px;
  }
  @media screen and (min-width: 2560px) {
  }
`;

export const Lutador = styled.img`
  position: absolute;
  left: 0;
  top: 6%;
  width: 140px;
  @media screen and (min-width: 375px) {
    width: 160px;
  }
  @media screen and (min-width: 425px) {
    width: 180px;
  }
  @media screen and (min-width: 768px) {
    width: 220px;
  }
  @media screen and (min-width: 1024px) {
    width: 230px;
    left: 90px;
  }
  @media screen and (min-width: 1440px) {
    width: 230px;
    left: 200px;
  }
  @media screen and (min-width: 1920px) {
    width: 350px;
    left: 250px;
  }
  @media screen and (min-width: 2560px) {
    left: 440px;
  }
`;

export const Xp = styled.img`
  position: absolute;
  width: 150px;
  z-index: 9;
  right: 15px;
  top: 58px;
  @media screen and (min-width: 375px) {
    width: 160px;
  }
  @media screen and (min-width: 425px) {
    width: 200px;
    top: 90px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    top: 110px;
    right: 50px;
  }
  @media screen and (min-width: 1024px) {
    right: 110px;
  }
  @media screen and (min-width: 1440px) {
    width: 180px;
    right: 260px;
    top: 110px;
  }
  @media screen and (min-width: 1920px) {
    right: 290px;
    width: 280px;
    top: 180px;
  }
  @media screen and (min-width: 2560px) {
    right: 480px;
    width: 280px;
    top: 180px;
  }
`;

export const Thirst = styled.img`
  position: absolute;
  width: 65px;
  z-index: 9;
  bottom: 35px;
  @media screen and (min-width: 375px) {
    width: 75px;
  }
  @media screen and (min-width: 425px) {
    width: 90px;
    right: 115px;
  }
  @media screen and (min-width: 768px) {
    width: 85px;
    right: 150px;
    bottom: 60px;
  }
  @media screen and (min-width: 1024px) {
    right: 230px;
  }
  @media screen and (min-width: 1440px) {
    width: 90px;
    right: 350px;
    bottom: 65px;
  }
  @media screen and (min-width: 1920px) {
    width: 120px;
    right: 39%;
  }
  @media screen and (min-width: 2560px) {
    right: 42%;
  }
`;

export const Hunger = styled.img`
  position: absolute;
  width: 55px;
  z-index: 9;
  right: 20px;
  bottom: 35px;
  @media screen and (min-width: 375px) {
    width: 65px;
  }
  @media screen and (min-width: 425px) {
    width: 85px;
  }
  @media screen and (min-width: 768px) {
    width: 75px;
    right: 50px;
    bottom: 60px;
  }
  @media screen and (min-width: 1024px) {
    right: 135px;
  }
  @media screen and (min-width: 1440px) {
    width: 80px;
    right: 255px;
    bottom: 65px;
  }
  @media screen and (min-width: 1920px) {
    width: 105px;
    right: 27%;
  }
  @media screen and (min-width: 2560px) {
    right: 33%;
  }
`;

export const Fight = styled.img`
  width: 140px;
  position: absolute;
  z-index: 9;
  bottom: -15px;
  right: 50%;
  left: 30%;
  @media screen and (min-width: 375px) {
    width: 150px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 250px;
  }
  @media screen and (min-width: 1920px) {
    left: 45%;
  }
`;

export const Lvl = styled.img`
  width: 60px;
  top: -25px;
  position: absolute;
  right: -15px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 425px) {
    width: 86px;
  }
  @media screen and (min-width: 768px) {
    width: 90px;
    top: -45px;
  }
  @media screen and (min-width: 1024px) {
    width: 90px;
    top: -50px;
    right: 50px;
  }
  @media screen and (min-width: 1440px) {
    width: 110px;
    right: 160px;
  }
  @media screen and (min-width: 1920px) {
    width: 150px;
    right: 220px;
  }
  @media screen and (min-width: 2560px) {
    right: 380px;
  }
`;

export const Str = styled.img`
  position: absolute;
  width: 120px;
  height: 35px;
  z-index: 9;
  right: 45px;
  top: 15px;
  @media screen and (min-width: 375px) {
    width: 130px;
  }
  @media screen and (min-width: 425px) {
    width: 140px;
    height: 50px;
    right: 75px;
    top: 22px;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 50px;
    right: 100px;
    top: 45px;
  }
  @media screen and (min-width: 1024px) {
    right: 160px;
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 45px;
    right: 290px;
  }

  @media screen and (min-width: 1920px) {
    width: 180px;
    height: 60px;
    top: 100px;
    right: 390px;
  }
  @media screen and (min-width: 2560px) {
    right: 580px;
  }
`;

export const Button = styled.button`
  border: none;
  position: absolute;
  z-index: 9;
  bottom: 0;
  right: 50%;
  left: 30%;
  transition: all 200ms ease-in;
  filter: grayscale(0.3) opacity(1);
  :hover {
    filter: grayscale(0) opacity(1);
  }
  ::before,
  ::after {
    transform: scaleY(-1);
  }
  @media screen and (min-width: 768px) {
    bottom: -4px;
    left: 34%;
  }
  @media screen and (min-width: 1024px) {
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    bottom: -10px;
  }
  @media screen and (min-width: 1920px) {
    left: 43%;
  }
`;
