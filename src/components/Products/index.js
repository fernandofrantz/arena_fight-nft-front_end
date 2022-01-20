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

  const fighters = [
    <ProductRender
      key={0}
      product={{
        id: 1,
        image: "/static/media/Barussi_HeavyFist.17666aa0666b63ae32cf.png",
        str: 100,
        exp: 10,
      }}
    />,
    <ProductRender
      key={0}
      product={{
        id: 2,
        image: "/static/media/Bella_ThornRose.6a9549e575a25cd6609b.png",
        str: 102,
        exp: 20,
      }}
    />,
    <ProductRender
      key={0}
      product={{
        id: 3,
        image: "/static/media/Ulisses_DeathDance.13144dfc22695220c8e1.png",
        str: 103,
        exp: 30,
      }}
    />,
    <ProductRender
      key={0}
      product={{
        id: 4,
        image: "/static/media/Dimitry_WarTank.499405f201937dca60fe.png",
        str: 104,
        exp: 40,
      }}
    />,
    <ProductRender
      key={0}
      product={{
        id: 5,
        image: "/static/media/Wonakashi_CalmLotus.29325595ac5f0ebe5ee9.png",
        str: 105,
        exp: 50,
      }}
    />,
  ];

  const [counter, setCounter] = useState(0);

  const countUp = () => {
    if (counter < fighters.length - 1) {
      setCounter(counter + 1);
    }
  };

  const countDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <ContainerList>
      {/* <SelectS
        name="category"
        onChange={(event) => handleFilter(event.target.value)}
      >
        <option value="0">Sort by:</option>
        <option value="1">EXP</option>
        <option value="2">STR</option>
      </SelectS> */}
      <div className="imgBox">
        <img className="mint" src={mint} alt=""></img>
        <img className="hospital" src={hospital} alt=""></img>
      </div>
      <div className="divlutadores">
        <ButtonE>
          <Arroww onClick={countDown} src={arrow2} alt="" />
        </ButtonE>
        <BoxList className="oneFighter">{fighters[counter]}</BoxList>
        <BoxList className="allFighters">
          {products.map((item, index) => (
            <ProductRender key={index} product={item} />
          ))}
        </BoxList>
        <ButtonE>
          <Arroww onClick={countUp} src={arrow} alt="" />
        </ButtonE>
      </div>
    </ContainerList>
  );
};
