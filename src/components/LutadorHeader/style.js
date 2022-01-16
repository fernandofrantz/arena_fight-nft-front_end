import styled from 'styled-components';

export const IconFighter = styled.img`
    width: 60%;
`;

export const DivLogo = styled.img`
    width: 150px;
    /* desktop width: 240px; */
    padding-top: 10%;
    @media screen and (min-width:768px) {
        width: 200px;
        padding-top: 0;
    }
    @media screen and (min-width: 1440px) {
        width: 230px;
    }
`;
export const DivTitle = styled.img`
    width: 260px;
    /* desktop width: 400px; */
    @media screen and (min-width:768px) {
        width: 400px;
    }
`;
export const DivTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        border:none;
        background-color: Transparent;
    }
`;

export const Container = styled.header`
    font-family: 'Oswald', sans-serif;
    display: flex;
    justify-content: center;
    text-shadow: 1px 3px 5px rgba(200,200,200,0.98);

    div {
        margin: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;