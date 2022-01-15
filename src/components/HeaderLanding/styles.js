import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 12vw;

  position: fixed;

  background-color: #00000090;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo {
    width: 10%;
  }

  div {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  button {
    width: 80px;
    height: 30px;

    border: none;
    border-radius: 5px;

    background-color: whitesmoke;
  }

  button:hover {
    transition: 1000ms;
    background-color: lightblue;
  }

  .buttonUse {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .usew {
    width: 90%;
  }

  .meta {
    width: 20%;
  }

  .buttonMeta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    p {
      font-size: 9px;
    }
  }

  @media screen and (min-width: 768px) {
    max-height: 50px;

    div {
      width: 40%;
    }

    .logo {
      max-width: 30px;
    }

    button {
      width: 100px;
    }

    .buttonMeta {
      p {
        font-size: 11px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    max-height: 50px;

    .logo {
      max-width: 40px;
    }

    div {
      width: 30%;
    }

    button {
      width: 110px;
    }

    .buttonMeta {
      p {
        font-size: 12px;
      }
    }
  }

  @media screen and (min-width: 2560px) {
    max-height: 60px;

    .logo {
      max-width: 45px;
    }

    div {
      width: 20%;
    }
  }

  button {
    width: 140px;
    height: 30px;
  }

  .buttonMeta {
    p {
      font-size: 15px;
    }
  }
`;
