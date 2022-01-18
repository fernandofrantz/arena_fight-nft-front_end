import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100vw;
    height: 12%;

    position: fixed;
    right: 0px;
    top: 0px;   
    background-color: #00000090;

    display: flex;
    align-items: center;



    .links {
        display: flex;
        font-size: 8px;
        p {
            font-size: 130%;
            margin: 10px;
        }
        p:hover {
            cursor: pointer
        }

    }

    .logo {
        width: 9%;
        margin-left: 20px;
    }

    @media screen and (min-width: 768px) {
        max-height: 50px;
        .logo {
            max-width: 30px;
        }
    }

    @media screen and (min-width: 1024px) {
        max-height: 50px;

        .logo {
            max-width: 40px;
        }

        .links {
            p {
                font-size: 16px;
            }
        }

    }

    @media screen and (min-width: 2560px) {
        max-height: 60px;

        .logo {
            max-width: 50px;
        }

        .links {
            p {
                font-size: 20px;
            }
        }
    }
`