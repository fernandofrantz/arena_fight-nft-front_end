import { StyledCardPreSale } from "./styles";

export const CardPreSale = ({ str, fighter, price, buyNow, cls }) => {
  let strCls = `str ${cls}`;
  let nftCls = `nft ${cls}`;
  let priceCls = `price ${cls}`;
  let buttonCls = `button ${cls}`;

  return (
    <StyledCardPreSale>
      <img className={strCls} src={str} alt="" />
      <img className={nftCls} src={fighter} alt="" />
      <img className={priceCls} src={price} alt="" />
      <img className={buttonCls} src={buyNow} alt="" />
    </StyledCardPreSale>
  );
};
