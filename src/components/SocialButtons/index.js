import twitter from '../../assets/images/Buttons/twitter.png'
import discord from '../../assets/images/Buttons/discord.png'
import telegram from '../../assets/images/Buttons/telegram.png'

import { StyledFooter } from './styles';

export const SocialButtons = () => {
  return (
    <StyledFooter>
      <img src={telegram} alt=''/>
      <img src={discord} alt=''/>
      <img src={twitter} alt=''/>
    </StyledFooter>
  );
};
