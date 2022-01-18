import { Container, Xp, Thirst, Hunger, Fight, Lvl, Str, Button, Lutador } from './style';
import xp from "../../assets/XP.png";
import thirst from "../../assets/thirstbutton.png";
import hunger from "../../assets/hungerbutton.png";
import fight from "../../assets/fightpixel.png";
import lvl from "../../assets/lvl.png";
import str from "../../assets/STRBUTT.png";
import lutador from "../../assets/Barussi_HeavyFist.png"

export const LutadorCard = () => {

    return (
        <Container>
            <Lutador src={lutador}/>
            <Xp src={xp}/>
            <Thirst src={thirst}/>
            <Lvl src={lvl}/>
            <Str src={str}/>
            <Hunger src={hunger}/>
            <Button>
            <Fight src={fight}/>
            </Button>
        </Container>
    )
}