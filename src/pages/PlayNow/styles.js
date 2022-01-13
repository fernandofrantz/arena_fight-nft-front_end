import styled from "styled-components";


export const StyledPlay = styled.div`

    width: 100vw;
    height: 100%;
    min-height: 100vh;

    background-color: #230433;
    
    padding-top: 12%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const MainBar = styled.div`
    width: 90%;
    height: 50px;

    margin-top: 40px;

    background-color: #d4d4d460;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;



    .aft {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .aftArea {
        width: 50px;
        height: 20px;

    }

    .claimButton {
        width: 30px;
        height: 15px;
    }

    .logo {
        width: 80px;
        margin-right: 10px;
    }

    .mintFighter {
        width: 65px;
    }
`


export const CountryFights = styled.div`

    width: 80%;
    margin-top: 30px;


    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .country {
        width: 220px;
    }


`

