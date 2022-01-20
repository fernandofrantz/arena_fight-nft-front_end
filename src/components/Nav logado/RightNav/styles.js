import styled from "styled-components";

export const Linv = styled.li``;

export const Ul = styled.ul`
  list-style: none;
  z-index: 15;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  li {
    margin: 10px;
    color: whitesmoke;
    font-size: 20px;
  }

  .divClaim {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .claimButton {
    width: 60px;
    height: 35px;
    margin: 0px;
  }

  .aftcounter {
    width: 130px;
  }

  .hospital {
    width: 70px;
  }
  .mintFighter {
    width: 70px;
  }
  .connect {
    width: 60px;
  }

  li img {
    margin: 0px;
  }

  li:hover {
    transition: 300ms;
    cursor: pointer;
    color: blueviolet;
  }

  img {
    width: 90px;
    margin-bottom: 1px;
    margin-right: 15px;
    cursor: pointer;
  }

  button {
    margin: 1px;
    margin-bottom: 1px;
    margin-right: 15px;
  }
  .last {
    margin-bottom: 25px;
  }

  .btn {
    width: 80px;
  }

  @media screen and (min-width: 425px) {
    .btn {
      width: 100px;
    }
  }

  @media (min-width: 769px) {
    .desktopnav {
      display: none;
    }
    .btn {
      width: 70px;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    top: 0;
    right: 0;
    min-height: 40vh;
    width: 104vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    img {
      width: 25vw;
      margin-bottom: 25px;
      margin-right: 1px;
    }
    button {
      margin: 1px;
      margin-bottom: 25px;
    }
    .btn {
      width: 90px;
    }
  }
`;
