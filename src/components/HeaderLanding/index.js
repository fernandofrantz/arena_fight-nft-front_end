import Logo from '../../assets/images/Logo.png'
import ConnectMetamask from '../../assets/images/ConnectToMetamask.png'
import UseWallet from '../../assets/images/UseWalletConnect.png'


import { StyledHeader } from "./styles"



export const HeaderLanding = () => {
    return (
        <>
            <StyledHeader>
                <img className='logo' src={Logo} alt=''></img>
                <div>
                    <img className='button' src={ConnectMetamask} alt=''/>
                    <img className='button' src={UseWallet} alt=''/>
                </div>
            </StyledHeader>
        </>
    )
}