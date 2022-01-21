import styled from "styled-components";
import fundo from "../../assets/Cardfighter.png";

export const Container = styled.button`
  background: url(${fundo});
  border: none;
  background-color: Transparent;
  background-size: cover;
  background-position-x: center;

  img {
    width: 100%;
    margin: 0px;
  }
  transition: all 200ms ease-in;
  filter: grayscale(0.5) opacity(0.9);
  :hover {
    filter: grayscale(0) opacity(1);
  }
  ::before,
  ::after {
    transform: scaleY(-1);
  }
`;
