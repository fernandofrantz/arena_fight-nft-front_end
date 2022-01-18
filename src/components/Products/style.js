import styled from "styled-components";

export const ContainerList = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .divlutadores{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const BoxList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 60px;
  justify-content: space-around;
  height: 11vw;
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
  @media screen and (min-width: 375px) {

    height: 10vw;
  }
  @media screen and (min-width:1000px) {
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
  margin-top: 75px;
  :active {
  }
  @media screen and (min-width:768px){
    width: 20%;
  }
  @media screen and (min-width:1000px){
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
`;

export const SelectS = styled.select`
    margin-left: 70%;
    margin-top: 7vh;
    margin-bottom: 7vh;
`;
