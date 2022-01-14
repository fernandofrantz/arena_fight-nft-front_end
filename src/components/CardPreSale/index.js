import { StyledCardPreSale } from "./styles";

export const CardPreSale = ({ str, fighter, price, buyNow, id }) => {
  return (
    <StyledCardPreSale>
      <img id={id} className="str" src={str} alt="" />
      <img id={id} className="nft" src={fighter} alt="" />
      <img id={id} className="price" src={price} alt="" />
      <img id={id} className="button" src={buyNow} alt="" />
    </StyledCardPreSale>
  );
};
