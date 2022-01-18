import { ProductList } from "../../components/Products/index";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import Navbar from "../../components/Nav logado/Nav/Navbar";

export const MyGym = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <ProductList />
    </Container>
  );
};
