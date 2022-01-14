import { useSelector } from "react-redux";
import { ProductRender } from "../Product";
import { BoxList, ContainerList, ButtonE, Arroww, SelectS } from "./style"; 
import arrow from "../../assets/right-arrow.png"
import arrow2 from "../../assets/left-arrow.png"

export const ProductList = () => {
    const products = useSelector(store => store.product);

    return (
        <ContainerList>
            <SelectS>
                <option value="0">Sort by:</option>
                <option value="1">EXP</option>
                <option value="2">STR</option>
            </SelectS>
            <ButtonE>
                <Arroww src={arrow2} alt=""/>
            </ButtonE>
            <BoxList>
                {products.map((item, index) => <ProductRender key={index} product={item}/>)}
            </BoxList>
            <ButtonE>
                <Arroww src={arrow} alt=""/>
            </ButtonE>
        </ContainerList>
    )
}