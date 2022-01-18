import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  background-color: #5ab5d700;
  .logo {
    width: 0%;

    @media (min-width: 769px) {
      width: 5%;
    }

    @media (min-width: 1440px) {
      width: 4%;
    }

    @media (min-width: 1920px) {
      width: 3%;
    }

    @media (min-width: 2560px) {
      width: 2%;
    }
  }
  @media (min-width: 769px) {
    background-color: #5ab5d7;
  }
`;
