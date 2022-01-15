import Logo from "../../assets/images/Logo.png";
import UseWallet from "../../assets/images/Buttons/walletconnect.png";
import ConnectMetamask from "../../assets/images/Buttons/metamaskbutton.png";

import { StyledHeader } from "./styles";

export const HeaderLanding = () => {
  return (
    <>
      <StyledHeader>
        <img className="logo" src={Logo} alt=""></img>
        <div>
          <button className="buttonUse">
            <img className="usew" src={UseWallet} alt="" />
          </button>
          <button className="buttonMeta">
            <img className="meta" src={ConnectMetamask} alt="" />
            <p>metamask</p>
          </button>
        </div>
      </StyledHeader>
    </>
  );
};
