import styled from 'styled-components';

export const Nav = styled.nav`
width: 100vw;
height: 55px;
padding: 0 20px;
display: flex;
justify-content: space-between;
.logo {
    width: 25%;
    @media (min-width: 768px) {
        width: 5%;
    }
}
`