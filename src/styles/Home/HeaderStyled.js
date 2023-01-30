import styled, { keyframes } from "styled-components";

import people from "../../assets/images/people.avif"

export const HeaderContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    padding: 50px;
    overflow: hidden;
`

//----------------------Left Side----------------------//

//---------------Keyframes---------------//

export const taglineEmerge = keyframes`
    0% {
        -webkit-transform: translateY(50px);
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
    }
`

export const appearance = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const disappear = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

export const fadeIn = keyframes`
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
    
export const extensionIn = keyframes`
    0% {
        width: 234px;
    }
    100% {
        width: 254px;
    }
`

export const extensionOut = keyframes`
    0% {
        width: 254px;
    }
    100% {
        width: 234px;
    }
`

export const LeftContainer = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 42px 41px 0px 0px;

    h1 {
        line-height: 57px;
    }
`

export const Spacer = styled.div`
    margin: 13px 0;
`

export const Title2 = styled.h1`
    font-size: 43px;
    font-weight: bold;
    color: #1F939B;
    letter-spacing: 2px;
    -webkit-transform: translateX(-1px);
    transform: translateX(-1px);
    -webkit-letter-spacing: 2px;

    span {
        display: block;
        font-size: 43px;
        -webkit-animation-name: ${taglineEmerge};
        animation-name: ${taglineEmerge};
        -webkit-animation-duration: 1400ms;
        animation-duration: 1400ms;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        opacity: 0;        
   }
`
   
export const SpanContainer = styled.div`
   overflow: hidden;

   &:nth-of-type(2) span{
        -webkit-animation-delay: 300ms;
        animation-delay: 300ms;
   }

   &:nth-of-type(3) span{
        -webkit-animation-delay: 600ms;
        animation-delay: 600ms;
   }
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-animation-name: ${fadeIn};
    animation-name: ${fadeIn};
    -webkit-animation-delay: 1400ms;
    animation-delay: 1400ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: 1400ms;
    animation-duration: 1400ms;
    opacity: 0;

`

export const ButtonContainer = styled.div`
    width: 254px;
`

export const Button = styled.button`
    width: 234px;
    position relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 12px 0px 12px 20px;
    background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);
    -webkit-animation-name: ${extensionOut};
    animation-name: ${extensionOut};
    -webkit-animation-duration: 300ms;
    animation-duration: 300ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    span {
        position: absolute;
        right: 20px;
        opacity: 0;
        -webkit-animation-name: ${disappear};
        animation-name: ${disappear};
        -webkit-animation-duration: 100ms;
        animation-duration: 100ms;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }
    
    &:hover {
        -webkit-animation: ${extensionIn} 0.4s forwards;
        animation: ${extensionIn} 0.4s forwards;
    }
    
    &:hover span {
        -webkit-animation-name: ${appearance};
        animation-name: ${appearance};
        -webkit-animation-delay: 100ms;
        animation-delay: 100ms;
        -webkit-animation-duration: 300ms;
        animation-duration: 300ms;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 35px;
`

export const Item = styled.div`
    display: flex;
    margin-top: 10px;

    span {
        font-size: 12px;
        color: #292626;
    }
`

//----------------------Right Side----------------------//

//---------------Keyframes---------------//

export const ill1 = keyframes`
    0% {
        transform: translate(-300px, -200px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`

export const ill2 = keyframes`
    0% {
        transform: translate(300px, -100px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`

export const ill3 = keyframes`
    0% {
        transform: translate(0px, -300px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`

export const ill4 = keyframes`
    0% {
        transform: translate(-300px, 200px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`

export const ill5 = keyframes`
    0% {
        transform: translate(300px, 250px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`

export const RightContainer = styled.div`
    height: 100%;
    width: 60%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Illustration1 = styled.div`
    height: 200px;
    width: 300px;
    position: absolute;
    top: 7%;
    left: -2%;
    border-radius: 5px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    -webkit-animation-name: ${ill1};
    animation-name: ${ill1};
    -webkit-animation-delay: 2000ms;
    animation-delay: 2000ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: 600ms;
    animation-duration: 600ms;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 0;
`

export const Illustration2 = styled.div`
    height: 200px;
    width: 300px;
    position: absolute;
    top: 10%;
    left: 47%;
    z-index: 1;
    border-radius: 5px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    -webkit-animation-name: ${ill2};
    animation-name: ${ill2};
    -webkit-animation-delay: 2400ms;
    animation-delay: 2400ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: 600ms;
    animation-duration: 600ms;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 0;
`

export const Illustration3 = styled.div`
    height: 200px;
    width: 300px;
    position: absolute;
    top: 33%;
    left: 28%;
    z-index: 2;
    border-radius: 5px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    -webkit-animation-name: ${ill3};
    animation-name: ${ill3};
    -webkit-animation-delay: 3000ms;
    animation-delay: 3000ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: 600ms;
    animation-duration: 600ms;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 0;
`

export const Illustration4 = styled.div`
    height: 200px;
    width: 300px;
    position: absolute;
    top: 57%;
    left: 7%;
    z-index: 3;
    border-radius: 5px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    -webkit-animation-name: ${ill4};
    animation-name: ${ill4};
    -webkit-animation-delay: 3100ms;
    animation-delay: 3100ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: 600ms;
    animation-duration: 600ms;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 0;
`

export const Illustration5 = styled.div`
    height: 200px;
    width: 300px;
    position: absolute;
    top: 60%;
    left: 59%;
    border-radius: 5px;
    background-image: url(${people});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 10px 15px 0px #f1f1f1;
    -webkit-animation-name: ${ill5};
    animation-name: ${ill5};
    -webkit-animation-delay: 2700ms;
    animation-delay: 2700ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: 600ms;
    animation-duration: 600ms;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;;
    opacity: 0;
`