import styled from "styled-components";
import background from "../../assets/images/image8.png";

export const Bgplay = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: inherit;
`;

export const StyledPlay = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .BackDiv {
    width: 100%;
    display: flex;

    img {
      width: 20%;
      align-items: flex-start;
      max-width: 120px;
    }
  }

  .BackDiv img:hover {
    cursor: pointer;
  }
`;

export const MainBar = styled.div`
  width: 90%;
  height: 50px;

  background-color: #d4d4d460;

  margin: 0px 0px 0px 0px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .aft {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .aftArea {
    width: 50px;
    height: 20px;
  }

  .claimButton {
    width: 30px;
    height: 15px;
  }

  .logo {
    width: 80px;
    margin-right: 10px;
  }

  .mintFighter {
    width: 65px;
    margin: 0px;
  }

  .claimButton,
  .logo,
  .mintFighter:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: 60px;

    .aftArea {
      width: 90px;
      height: 30px;
    }

    .claimButton {
      width: 50px;
      height: 28px;
    }

    .logo {
      width: 150px;
      margin-right: 60px;
    }

    .mintFighter {
      width: 85px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
    height: 60px;

    .aftArea {
      width: 120px;
      height: 40px;
    }

    .claimButton {
      width: 70px;
      height: 38px;
    }

    .logo {
      width: 150px;
      margin-right: 100px;
    }

    .mintFighter {
      width: 85px;
    }
  }

  @media screen and (min-width: 2560px) {
    width: 65%;
    height: 100px;

    .aftArea {
      width: 160px;
      height: 60px;
    }

    .claimButton {
      width: 90px;
      height: 58px;
    }

    .logo {
      width: 250px;
      margin-right: 150px;
    }

    .mintFighter {
      width: 120px;
    }
  }
`;

export const CountryFights = styled.div`
  width: 90%;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .country {
    width: 120px;
  }

    @media screen and (min-width:375px){
      .country {
            width: 140px;
        }
    }

    @media screen and (min-width: 768px) {
        .country {
            width: 300px;
        }
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 50px 0px 0px 0px;
    .country {
      width: 380px;
    }
  }

    @media screen and (min-width: 2560px) {
      margin: 100px 0px 0px 0px;
      .country {
        width: 550px;
      }
    }
  }
`;
