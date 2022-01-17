import { Container } from "./styles";
import { LutadorCard } from "../../components/LutadorCard";
import { LutadorHeader } from "../../components/LutadorHeader";

export const Lutador = () => {
  return (
    <Container>
      <LutadorHeader />
      <LutadorCard />
    </Container>
  );
};
