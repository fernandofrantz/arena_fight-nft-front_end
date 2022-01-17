import styled from "styled-components";
import fundo from "../../assets/boxzinha.png"

export const Container = styled.div`
    position: relative;
    background: url(${fundo});
    border: none;
    background-color: Transparent;
    background-size: cover;
    background-position-x: center;
    width: 90%;
    height: 22%;
    margin: 0 auto;
    
    @media screen and (min-width: 375px) {
        height: 26%;
    }
    @media screen and (min-width: 425px) {
        height: 30%;
    }
    @media screen and (min-width: 768px) {
        height: 54%;
    }
    @media screen and (min-width: 1024px) {
        height: 55%;
        background-size: contain;
        background-repeat: no-repeat;
    }
    @media screen and (min-width: 1920px) {

    }
    @media screen and (min-width: 2560px) {

    }
`;

export const Lutador = styled.img`
    position: absolute;
    left: 0;
    top: 6%;
    width: 140px;
    @media screen and (min-width: 375px) {
        width: 160px;
    }
    @media screen and (min-width: 425px) {
        width: 180px;
    }
    @media screen and (min-width: 768px) {
        width: 330px;
    }
    @media screen and (min-width: 1024px) {
        left: 100px;
    }
    @media screen and (min-width: 1440px) {
        width: 400px;
        left: 240px;
    }
    @media screen and (min-width: 1920px) {
        width: 450px;
        left: 430px;
    }
    @media screen and (min-width: 2560px) {

    }
`;

export const Xp = styled.img`
    position: absolute;
    width: 150px;
    z-index: 9;
    right: 15px;
    top: 58px;
    @media screen and (min-width: 375px) {
        width: 180px;
        top: 80px;
    }
    @media screen and (min-width: 425px) {
        width: 200px;
        top: 90px;
    }
    @media screen and (min-width: 768px) {
        width: 370px;
        top: 150px;
        right: 20px;
    }
    @media screen and (min-width: 1024px) {
        right: 140px;
    }
    @media screen and (min-width: 1440px) {
        right: 260px;
        width: 410px;
        top: 190px;
    }
    @media screen and (min-width: 1920px) {
        right: 470px;
        width: 430px;
        top: 220px;
    }
    @media screen and (min-width: 2560px) {

    }
`;

export const Thirst = styled.img`
    position: relative;
    width: 65px;
    z-index: 9;
    right: 90px;
    bottom: 35px;
    @media screen and (min-width: 375px) {
        width: 77px;
        right: 100px;
    }
    @media screen and (min-width: 425px) {
        width: 90px;
        right: 115px;
    }
    @media screen and (min-width: 768px) {
        width: 180px;
        right: 200px;
        bottom: 55px;
    }
    @media screen and (min-width: 1024px) {
        right: 300px;
    }
    @media screen and (min-width: 1440px) {
        width: 210px;
        right: 485px;
        bottom: 65px;
    }
    @media screen and (min-width: 1920px) {
        right: 39%;
    }
    @media screen and (min-width: 2560px) {

    }
`;

export const Hunger = styled.img`
    position: absolute;
    width: 55px;
    z-index: 9;
    right: 20px;
    bottom: 35px;
    @media screen and (min-width: 375px) {
        width: 70px;
    }
    @media screen and (min-width: 425px) {
        width: 85px;
    }
    @media screen and (min-width: 768px) {
        width: 155px;
        right: 35px;
        bottom: 55px;
    }
    @media screen and (min-width: 1024px) {
        right: 135px;
    }
    @media screen and (min-width: 1440px) {
        width: 205px;
        right: 265px;
        bottom: 65px;
    }
    @media screen and (min-width: 1920px) {
        right: 27%;
    }
    @media screen and (min-width: 2560px) {

    }
`;


export const Fight = styled.img`
    width: 140px;
    position: absolute;
    z-index: 9;
    bottom: -15px;
    right: 50%;
    left: 30%;
    @media screen and (min-width: 768px) {
        width: 200px;
    }
    @media screen and (min-width: 1440px) {
        width: 250px;
    }
    @media screen and (min-width: 1920px) {
        left: 45%;
    }
`;

export const Lvl = styled.img`
    width: 60px;
    top: -25px;
    position: absolute;
    right: -15px;
    @media screen and (min-width: 375px) {
        width: 80px;
        right: -19px;
    }
    @media screen and (min-width: 425px) {
        width: 86px;
    }
    @media screen and (min-width: 768px) {
        width: 140px;
        top: -45px;
    }
    @media screen and (min-width: 1024px) {
        width: 165px;
        top: -70px;
        right: 60px;
    }
    @media screen and (min-width: 1440px) {
        width: 190px;
        right: 180px;
    }
    @media screen and (min-width: 1920px) {
        width: 210px;
        right: 365px;
    }
    @media screen and (min-width: 2560px) {

    }
`;

export const Str = styled.img`
    position: absolute;
    width: 120px;
    height: 35px;
    z-index: 9;
    right: 45px;
    top: 15px;
    @media screen and (min-width: 375px) {
        width: 130px;
        height: 44px;
        right: 65px;
    }
    @media screen and (min-width: 425px) {
        width: 140px;
        height: 50px;
        right: 75px;
        top: 22px;
    }
    @media screen and (min-width: 768px) {
        width: 265px;
        height: 80px;
        right: 125px;
        top: 45px;
    }
    @media screen and (min-width: 1024px) {
        right: 240px;
    }
    @media screen and (min-width: 1440px) {
        width: 300px;
        height: 110px;
        right: 375px;
    }
    @media screen and (min-width: 1920px) {
        right: 600px;
    }
    @media screen and (min-width: 2560px) {

    }
`;


export const Button = styled.button` 
    border: none;
    position: absolute;
    z-index: 9;
    bottom: 0;
    right: 50%;
    left: 30%;
    transition: all 200ms ease-in;
    filter: grayscale(.3) opacity(1);
    :hover{
        filter: grayscale(0) opacity(1);
    }
    ::before,::after{
        transform: scaleY(-1);
    }
    @media screen and (min-width: 768px) {
        bottom: -4px;
        left: 34%;
    }
    @media screen and (min-width:1024px) {
        left: 40%;
    }
    @media screen and (min-width: 1440px) {
        bottom: -10px;
    }
    @media screen and (min-width: 1920px) {
        left: 43%;
    }
`;