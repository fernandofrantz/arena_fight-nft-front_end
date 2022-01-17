import { Container, DivTop, DivLogo, DivTitle } from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/arenafight_logo.png";
import mygym from "../../assets/MYGYMBUTTON.png";

export const LutadorHeader = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <DivTop>
        <button onClick={() => handleClick("/")}></button>
        <DivTitle src={mygym} />
      </DivTop>
    </Container>
  );
};
