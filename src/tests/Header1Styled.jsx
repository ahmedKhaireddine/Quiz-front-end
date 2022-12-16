import styled, { keyframes } from "styled-components";

import people from "../assets/images/people.jpg"

export const HeaderContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex:
    flex-direction: column;
`

export const BackgroundContainer = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    margin-top: 50px;
`

export const LeftContainer = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    // justify-content: center;
    align-items: center;
`

export const SloganCard = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 30px 20px;
    text-align: center;
    margin-left: 64px;
    
    h2 {
        margin: 0;
        font-size: 40px;
        line-height: 50px;
        font-weight: bold;
        color: #1F939B;
    }
    
    p {
        margin: 30px 0;
        font-size: 18px;
        color: black;
    }
`

export const ButtonContainer = styled.div`
    width: 254px;
`
export const extensionIn = keyframes`
    0% {
        width: 234px;
    }
    100% {
        width: 254px;
    }
`

// export const extensionOut = keyframes`
//     100% {
//         width: 254px;
//     }
//     0% {
//         width: 234px;
//     }
// `

export const apparition = keyframes`
    0% {
        display: none;
        opacity: 0;
    }
    50% {
        display: inline-block;
        opacity: 0;
    }
    100% {
        display: inline-block;
        opacity: 1;
    }
`

export const Button = styled.a`
    width: 234px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 12px 0px 12px 20px;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);

    position relative;

    &::before {
        content: "";
        position: absolute;
        opacity: 0;
        width: 20px;
        right: 8%;
        transform: translateX(-20px);
        transition: all 2s ease-in-out;
        background: red;
    }

    &:hover::before {
        opacity: 1;
        transform: translateX(20px);
    }

    // span {
    //     opacity: 0;
    //     overflow: hidden:
    //     transition: opacity 2s;
    // }
    
    // &:hover {
    //     animation: ${extensionIn} 2s forwards;
    //     padding: 12px 20px;
    //     span {
    //         opacity: 1;
    //         overflow: visible;
    //     }
    // }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

export const List = styled.div`
    display: flex;
    margin-top: 10px;

    span {
        color: #777;
        font-size: 12px;
    }
`

export const RightContainer = styled.div`
    height: 100%;
    width: 50vw;
    position: relative;
`

export const IllustrationContainer = styled.div`
    height: 80%;
    width: 80%;
    background: blue;
`

export const Illustration1 = styled.div`
    height: 200px;
    width: 300px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    position: absolute;
    top: 2%;
    left: -15%;
`

export const Illustration2 = styled.div`
    height: 200px;
    width: 300px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    position: absolute;
    top: 8%;
    left: 41%;
    z-index: 1;
`

export const Illustration3 = styled.div`
    height: 200px;
    width: 300px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    position: absolute;
    top: 30%;
    left: 13%;
    z-index: 2;
`

export const Illustration4 = styled.div`
    height: 200px;
    width: 300px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    position: absolute;
    top: 48%;
    left: -16%;
    z-index: 3;
`

export const Illustration5 = styled.div`
    height: 200px;
    width: 300px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    position: absolute;
    top: 52%;
    left: 41%;
`