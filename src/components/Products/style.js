import styled from "styled-components";

export const ContainerList = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .divlutadores {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 0px;
  }
  .imgBox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .mint {
      width: 80px;
    }
    .hospital {
      width: 100px;
    }
  }

  @media screen and (min-width: 375px) {
    .imgBox {
      display: flex;
      justify-content: center;
      align-items: center;
      .mint {
        width: 100px;
      }
      .hospital {
        width: 120px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .imgBox {
      display: flex;
      justify-content: center;
      align-items: center;
      .mint {
        width: 120px;
      }
      .hospital {
        width: 140px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .imgBox {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 300px;
      margin-bottom: 50px;
      .mint {
        width: 140px;
      }
      .hospital {
        width: 160px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .imgBox {
      margin-right: 250px;
      .mint {
        width: 160px;
      }
      .hospital {
        width: 180px;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    .imgBox {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 400px;
      margin-bottom: 100px;
      .mint {
        width: 200px;
      }
      .hospital {
        width: 220px;
      }
    }
  }

  @media screen and (min-width: 2560px) {
    .imgBox {
      margin-right: 550px;
    }
  }
`;

export const BoxList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  height: 6vw;
  width: 60px;
  align-items: center;
  flex-direction: column;
  div {
    flex-basis: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-height: 758px) {
    min-height: 70vh;
  }
  @media screen and (min-width: 375px) {
    height: 10vw;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
    flex-direction: row;
  }
  @media screen and (min-width: 2560px) {
    height: 9.5vw;
  }
`;

export const ButtonE = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 30%;
  height: 50%;
  :active {
  }
  @media screen and (min-width: 425px) {
    width: 20%;
  }

  @media screen and (min-width: 768px) {
    width: 20%;
  }
  @media screen and (min-width: 1000px) {
    width: 13%;
  }
`;

export const Arroww = styled.img`
  width: 50%;
  transition: all 200ms ease-in;
  filter: grayscale(1) opacity(0.8);
  :hover {
    filter: grayscale(0) opacity(1);
  }
  ::before,
  ::after {
    transform: scaleY(-1);
  }

  /* @media screen and (min-width: 426px) { */
  /* width: 65px; */
  /* } */
`;

export const SelectS = styled.select`
  margin-left: 70%;
  margin-top: 7vh;
  margin-bottom: 7vh;

  z-index: 2;
`;
