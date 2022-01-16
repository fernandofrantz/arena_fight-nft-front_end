import styled from 'styled-components';
import background from '../../assets/gympix.png';


export const Container = styled.div`
        margin: 0;
        padding: 0;
        background-image: url(${background});
        background-repeat: no-repeat;
        color: #fff;
        width: 100vw;
        height: 100vh;
        font-family: 'Oswald', sans-serif;
        background-color: #dc8a59;
        background-position-x: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;
