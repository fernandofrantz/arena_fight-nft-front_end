import { useSelector } from "react-redux";
import { useState } from "react";
import { ProductRender } from "../Product";
import { BoxList, ContainerList, ButtonE, Arroww, SelectS } from "./style";
import arrow from "../../assets/right-arrow.png";
import arrow2 from "../../assets/left-arrow.png";

import hospital from "../../assets/images/Buttons/hospital.png";
import mint from "../../assets/images/Buttons/MintFighter.png";

export const ProductList = (filteredGroups) => {
  const [filteredCard, setFilteredCard] = useState([]);
  const products = useSelector((store) => store.product);
  const handleFilter = (event) => {
    if (filteredGroups) {
      setFilteredCard(filteredGroups.filter((item) => item.category === event));
    }
  };

  return (
    <ContainerList>
      <SelectS
        name="category"
        onChange={(event) => handleFilter(event.target.value)}
      >
        <option value="0">Sort by:</option>
        <option value="1">EXP</option>
        <option value="2">STR</option>
      </SelectS>
      <div className="imgBox">
        <img className="mint" src={mint} alt=""></img>
        <img className="hospital" src={hospital} alt=""></img>
      </div>
      <div className="divlutadores">
        <ButtonE>
          <Arroww src={arrow2} alt="" />
        </ButtonE>
        <BoxList>
          {products.map((item, index) => (
            <ProductRender key={index} product={item} />
          ))}
        </BoxList>
        <ButtonE>
          <Arroww src={arrow} alt="" />
        </ButtonE>
      </div>
    </ContainerList>
  );
};
