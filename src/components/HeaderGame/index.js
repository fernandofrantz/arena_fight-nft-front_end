import { StyledHeader } from "../HeaderGame/styles"

import Logo from '../../assets/images/Logo.png'
import { Link } from "react-router-dom"

export const HeaderGame = () => {
    return (
        <>
            <StyledHeader>
                <img className="logo" src={Logo} alt=""/>
                <div className="links">
                    <p>Home</p>
                    <p>My Gym</p>
                    <p>Mint Fighter</p>
                    <p>Play now</p>
                </div>
            </StyledHeader>
        </>
    )
}