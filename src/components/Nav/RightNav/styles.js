import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  z-index: 9;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  img {
    width: 125px;
    margin-bottom: 1px;
    margin-right: 15px;
  }
  button {
    margin: 1px;
    margin-bottom: 1px;
    margin-right: 15px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 200vh;
    width: 104vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    img {
      width: 55vw;
      margin-bottom: 25px;
      margin-right: 1px;

      @media screen and (min-width: 768px) {
        width: 30vw;
      }
    }
    button {
      margin: 1px;
      margin-bottom: 25px;
    }
  }
`;
