import styled from 'styled-components';

export const Nav = styled.nav`
width: 100vw;
height: 55px;
padding: 0 20px;
display: flex;
justify-content: space-between;
background-color: #5AB5D700;
align-items: center;
p{
    margin: 10px;
}
.menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width:769px) {
        display: none;
    }
}
.logo {
    width: 0%;
    @media (min-width: 769px) {
        width: 5vw;
    }
    @media (min-width: 1440px){
        width: 3vw;
    }
    @media screen and (min-width: 1920px) {
        width: 2vw;
    }
}
@media (min-width: 769px) {
    background-color: #5ab5d7;
}
`