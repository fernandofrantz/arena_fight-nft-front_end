import { Container } from './style';

export const ProductRender = ({product}) => {


   const { name, image } = product;

    return (
        <Container>
            <img src={image} alt={name}></img>

        </Container>
    )
}