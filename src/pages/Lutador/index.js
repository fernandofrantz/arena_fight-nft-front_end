import { Container } from "./styles";
import { LutadorCard } from "../../components/LutadorCard";
import { LutadorHeader } from "../../components/LutadorHeader";
import  Navbar  from "../../components/Nav logado/Nav/Navbar"

export const Lutador = () => {
  return (
    <Container>
      <Navbar/>
      <LutadorHeader />
      <LutadorCard />
    </Container>
  );
};
