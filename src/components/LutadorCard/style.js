import styled from "styled-components";
import fundo from "../../assets/boxzinha.png";

export const Container = styled.div`
  position: relative;
  background: url(${fundo});
  border: none;
  background-color: Transparent;
  background-size: cover;
  background-position-x: center;
  width: 288px;
  min-width: 300px;
  min-height: 210px;
  margin: 0 auto;

  .goBack {
    position: absolute;
    z-index: 9;
    top: -20px;
    right: 120px;
    img {
      width: 80px;
    }
  }

  @media screen and (min-width: 375px) {
    min-height: 230px;
    width: 330px;
    .goBack {
      right: 130px;
    }
  }
  @media screen and (min-width: 425px) {
    min-height: 270px;
    width: 382.5px;
    height: 270px;
    .goBack {
      top: -25px;
      right: 150px;
      img {
        width: 100px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 460px;
    min-height: 320px;
    max-height: 350px;
    .goBack {
      top: -20px;
      right: 60px;
      img {
        width: 110px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    background-size: contain;
    background-repeat: no-repeat;
    .goBack {
      top: -20px;
      right: -80px;
      img {
        width: 120px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .goBack {
      top: -20px;
      right: -280px;
      img {
        width: 120px;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    min-height: 450px;
    min-width: 600px;
    .goBack {
      right: -380px;
      img {
        width: 180px;
      }
    }
  }
  @media screen and (min-width: 2560px) {
    .goBack {
      position: absolute;
      z-index: 9;
      top: -20px;
      right: -700px;
      img {
        width: 200px;
      }
    }
  }
`;

export const Lutador = styled.img`
  position: absolute;
  left: 0;
  top: 10px;
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
    left: 0px;
  }
  @media screen and (min-width: 1440px) {
    width: 230px;
    left: 00px;
  }
  @media screen and (min-width: 1920px) {
    width: 330px;
    left: 0px;
  }
  @media screen and (min-width: 2560px) {
    width: 300px;
    left: 0px;
  }
`;

export const Xp = styled.img`
  position: absolute;
  width: 140px;
  z-index: 9;
  right: 20px;
  top: 70px;
  @media screen and (min-width: 375px) {
    width: 160px;
  }
  @media screen and (min-width: 425px) {
    width: 180px;
    right: 30px;
    top: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    top: 110px;
    right: 50px;
  }
  @media screen and (min-width: 1024px) {
    right: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 180px;
    right: 50px;
    top: 110px;
  }
  @media screen and (min-width: 1920px) {
    right: 40px;
    width: 250px;
    height: 60px;
    top: 180px;
  }
  @media screen and (min-width: 2560px) {
    right: 40px;
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
    right: 100px;
  }
  @media screen and (min-width: 425px) {
    width: 80px;
    bottom: 40px;
    right: 115px;
  }
  @media screen and (min-width: 768px) {
    width: 85px;
    right: 150px;
    bottom: 60px;
  }
  @media screen and (min-width: 1024px) {
    right: 150px;
  }
  @media screen and (min-width: 1440px) {
    width: 90px;
    right: 150px;
    bottom: 65px;
  }
  @media screen and (min-width: 1920px) {
    width: 120px;
    right: 40px;
    bottom: 80px;
  }
  @media screen and (min-width: 2560px) {
    right: 200px;
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
    width: 70px;
    bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 75px;
    right: 50px;
    bottom: 60px;
  }
  @media screen and (min-width: 1024px) {
    right: 60px;
  }
  @media screen and (min-width: 1440px) {
    width: 80px;
    right: 50px;
    bottom: 65px;
  }
  @media screen and (min-width: 1920px) {
    width: 105px;
    bottom: 80px;
    right: 180px;
  }
  @media screen and (min-width: 2560px) {
    right: 80px;
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
    width: 75px;
  }
  @media screen and (min-width: 768px) {
    width: 90px;
    top: -45px;
  }
  @media screen and (min-width: 1024px) {
    width: 90px;
    top: -50px;
    right: -30px;
  }
  @media screen and (min-width: 1440px) {
    width: 100px;
    right: -30px;
  }
  @media screen and (min-width: 1920px) {
    width: 120px;
    right: -40px;
  }
  @media screen and (min-width: 2560px) {
    right: -30px;
  }
`;

export const Str = styled.img`
  position: absolute;
  width: 100px;
  height: 30px;
  z-index: 9;
  right: 60px;
  top: 25px;
  @media screen and (min-width: 375px) {
    right: 70px;
    width: 110px;
    height: 35px;
  }
  @media screen and (min-width: 425px) {
    width: 130px;
    height: 40px;
    right: 80px;
    top: 45px;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 50px;
    right: 100px;
    top: 45px;
  }
  @media screen and (min-width: 1024px) {
    right: 90px;
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 45px;
    right: 80px;
  }

  @media screen and (min-width: 1920px) {
    width: 180px;
    height: 60px;
    top: 100px;
    right: 110px;
  }
  @media screen and (min-width: 2560px) {
    right: 140px;
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
    left: 140px;
  }
  @media screen and (min-width: 1024px) {
    left: 145px;
  }
  @media screen and (min-width: 1440px) {
    left: 120px;
    bottom: -10px;
  }
  @media screen and (min-width: 1920px) {
    left: 200px;
    bottom: 0px;
  }
`;
