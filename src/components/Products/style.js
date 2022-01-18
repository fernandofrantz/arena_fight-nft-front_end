import styled from "styled-components";

export const ContainerList = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 1000px;
  justify-content: space-around;
  height: 11vw;

  div {
    flex-basis: 250px;
    display: flex;
<<<<<<< HEAD
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 375px) {
    height: 10vw;
  }
  @media screen and (min-width: 2560px) {
    height: 9.5vw;
  }
=======
    flex-wrap: nowrap;
    flex-direction: row;
    width: 1000px;
    justify-content: space-around;
    



    div {
        flex-basis: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width:2050px) {
        max-height: 250px;

        img {
            max-height: 250px;
        }
    }


>>>>>>> 524e2aebcb44b3a9743b9383ccf7036e50135b3f
`;

export const ButtonE = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 13%;
  height: 50%;
  :active {
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
`;

export const SelectS = styled.select`
  position: absolute;
  top: 50%;
  left: 70%;
`;
