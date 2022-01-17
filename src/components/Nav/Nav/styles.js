import styled from 'styled-components';

export const Nav = styled.nav`
width: 100vw;
height: 55px;
padding: 0 20px;
display: flex;
justify-content: space-between;
background-color: #5AB5D700;
.logo {
    width: 0%;
    @media (min-width: 769px) {
        width: 5%;
    }
    
}
@media (min-width: 769px) {
    background-color: #5ab5d7;
}
`