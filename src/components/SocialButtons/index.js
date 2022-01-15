import twitter from "../../assets/images/Buttons/twitter.png";
import discord from "../../assets/images/Buttons/discord.png";
import telegram from "../../assets/images/Buttons/telegram.png";

import { StyledFooter } from "./styles";

export const SocialButtons = () => {
  return (
    <StyledFooter>
      <a href="https://t.me/ArenaFightOficial" target="_blank" rel="noreferrer">
        <img src={telegram} alt="" />
      </a>
      <a
        href="https://discord.com/invite/DzEbvWeYsQ"
        target="_blank"
        rel="noreferrer"
      >
        <img src={discord} alt="" />
      </a>
      <a
        href="https://twitter.com/ArenaFight1"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="" />
      </a>
    </StyledFooter>
  );
};
