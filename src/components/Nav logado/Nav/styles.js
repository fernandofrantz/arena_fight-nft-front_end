import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #5ab5d700;
  align-items: center;
  p {
    margin: 10px;
    color: whitesmoke;
  }

  p:hover {
    cursor: pointer;
    color: blueviolet;
    transition: 200ms;
  }

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 769px) {
      display: none;
    }
  }
  .logo {
    width: 0%;
    @media (min-width: 769px) {
      width: 5vw;
    }
    @media (min-width: 1440px) {
      width: 3vw;
    }
    @media (min-width: 2560px) {
      width: 2vw;
    }
  }
  @media (min-width: 769px) {
    background-color: #00000080;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 130px;
    }
    img:hover {
      cursor: pointer;
    }
  }
`;
