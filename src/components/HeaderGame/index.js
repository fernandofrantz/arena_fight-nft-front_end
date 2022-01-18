import { StyledHeader } from "../HeaderGame/styles";

import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const HeaderGame = () => {
  const navigate = useNavigate();

  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <StyledHeader>
        <img className="logo" src={Logo} alt="" />
        <div className="links">
          <p onClick={() => sendTo("/")}>Home</p>
          <p onClick={() => sendTo("/my-gym")}>My Gym</p>
          <p>Mint Fighter</p>
          <p onClick={() => sendTo("/play")}>Play now</p>
        </div>
      </StyledHeader>
    </>
  );
};
