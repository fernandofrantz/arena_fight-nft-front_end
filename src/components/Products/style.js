import styled from "styled-components";

export const ContainerList = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .allFighters {
    display: none;
  }
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
    .allFighters {
      display: flex;
    }
    .oneFighter {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    .imgBox {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      top: -250px;
      right: 20px;
      .mint {
        width: 120px;
      }
      .hospital {
        width: 140px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .imgBox {
      top: -300px;
      .mint {
        width: 140px;
      }
      .hospital {
        width: 160px;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    .imgBox {
      top: -300px;
      .mint {
        width: 160px;
      }
      .hospital {
        width: 180px;
      }
    }
  }

  @media screen and (min-width: 2560px) {
    .imgBox {
      top: -300px;
      .mint {
        width: 180px;
      }
      .hospital {
        width: 200px;
      }
    }
  }
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 150px;
  align-items: center;
  flex-direction: column;
  height: 300px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 375px) {
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
