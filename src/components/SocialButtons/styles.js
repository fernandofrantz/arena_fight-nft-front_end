import styled from 'styled-components'

export const StyledFooter = styled.aside`
    width: 5%;
    position: fixed;
    float: right;
    left: 10px;
    bottom: 10px;

    img {
        width: 40px;
    }


    @media screen and (min-width:768px) {
        img {
            width: 50px;
        }
    }

    @media screen and (min-width:1024px) {
        img {
            width: 60px;
        }
    }

    @media screen and (min-width:1440px) {
        img {
            width: 70px;
        }
    }

    @media screen and (min-width:2560px) {
        img {
            width: 100px;
        }
    }
`
