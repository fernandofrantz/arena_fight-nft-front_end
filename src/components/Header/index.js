import { Container, DivTop, DivLogo, DivTitle, IconFighter } from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/arenafight_logo.png"
import mygym from "../../assets/MYGYMBUTTON.png"
import iconfighters from "../../assets/Fighters.png"

export const Header = () => {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);

    }

    return (
        <Container>

        <DivTop>
            <button onClick={() => handleClick('/')}>
            <DivLogo src={logo}/>
            </button>
            <DivTitle src={mygym}/>  
            <IconFighter src={iconfighters}/>
         </DivTop>
        </Container>
    )
}