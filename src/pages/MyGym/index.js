import { ProductList } from '../../components/Products/index';
import { Container } from './styles';
import { Header } from '../../components/Header';

export const MyGym = () => {

    return (
        <Container>
            <Header />
            <ProductList />
        </Container>
    )
}