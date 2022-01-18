import {
  Container,
  Xp,
  Thirst,
  Hunger,
  Fight,
  Lvl,
  Str,
  Button,
  Lutador,
} from "./style";
import xp from "../../assets/XP.png";
import thirst from "../../assets/thirstbutton.png";
import hunger from "../../assets/hungerbutton.png";
import fight from "../../assets/fightpixel.png";
import lvl from "../../assets/lvl.png";
import str from "../../assets/STRBUTT.png";
import lutador from "../../assets/Barussi_HeavyFist.png";

import goBack from "../../assets/images/Buttons/BackButton.png";
import { useNavigate } from "react-router-dom";

export const LutadorCard = () => {
  const navigate = useNavigate();

  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <div className="goBack">
        <img onClick={() => sendTo("/my-gym")} src={goBack} alt=""></img>
      </div>
      <Lutador src={lutador} />
      <Xp src={xp} />
      <Thirst src={thirst} />
      <Lvl src={lvl} />
      <Str src={str} />
      <Hunger src={hunger} />
      <Button>
        <Fight src={fight} />
      </Button>
    </Container>
  );
};
