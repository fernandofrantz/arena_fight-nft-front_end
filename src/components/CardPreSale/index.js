import { StyledCardPreSale } from "./styles";

export const CardPreSale = ({ str, fighter, price, buyNow, id }) => {
  return (
    <StyledCardPreSale>
      <div id={id}>
        <img className="str" src={str} alt="" />
        <img className="nft" src={fighter} alt="" />
        <img className="price" src={price} alt="" />
        <img className="button" src={buyNow} alt="" />
      </div>
    </StyledCardPreSale>
  );
};
