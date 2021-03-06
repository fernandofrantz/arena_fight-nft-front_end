import styled from "styled-components";

export const IconFighter = styled.img`
  width: 50%;

  @media screen and (min-width: 1440px) {
    width: 60%;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;
  }
`;

export const DivLogo = styled.img`
  width: 180px;
  /* desktop width: 240px; */

  @media screen and (min-width: 426px) {
    width: 300px;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const DivTitle = styled.img`
  width: 200px;
  /* desktop width: 400px; */

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 600px;
  }
`;
export const DivTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    border: none;
    background-color: Transparent;
  }
`;

export const Container = styled.header`
  font-family: "Oswald", sans-serif;
  display: flex;
  justify-content: center;
  text-shadow: 1px 3px 5px rgba(200, 200, 200, 0.98);

  div {
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      margin: 0;
      font-size: 40px;
    }

    button {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    top: 100px;
  }
`;
