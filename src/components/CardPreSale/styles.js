import styled from "styled-components";

export const StyledCardPreSale = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 200px;

  margin: 50px 25px 0px 25px;

  img {
    width: 100%;
  }

  img:hover {
    cursor: pointer;
  }

  .str {
  }

  .nft {
  }

  .price {
  }

  .button {
  }

  @media screen and (min-width: 768px) {
    margin: 50px;

    img {
      width: 120%;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 50px 50px 100px 50px;

    img {
      width: 160%;
    }
  }

  @media screen and (min-width: 1440px) {
    margin: 120px 70px 100px 60px;

    img {
      width: 180%;
    }
  }

  @media screen and (min-width: 2560px) {
    margin: 150px 100px 100px 100px;

    img {
      width: 200%;
    }
  }
`;
