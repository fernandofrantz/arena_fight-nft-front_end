import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100vw;
    height: 12vw;

    position: fixed;

    background-color: #00000090;

    display: flex;
    justify-content: space-around;
    align-items: center;


    .logo {
        width: 10%;
    }

    .button {
        width: 40%;
        height: 150%;
    }

    div {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;


    }

    @media screen and (min-width: 768px) {
        max-height: 50px;

        div {
            width: 40%;
        }

        .logo {
            max-width: 30px;
        }
    }

    @media screen and (min-width: 1024px) {
        max-height: 50px;

        .logo {
            max-width: 40px;
        }

        div {
            width: 30%;
        }
    }

    @media screen and (min-width: 2560px) {
        max-height: 60px;

        .logo {
            max-width: 45px;
        }

        div {
            width: 20%;
        }
    }
`