import styled from "styled-components";

import { appearance } from "./HeaderStyled";

export const Arrow = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 50px;
    bottom: 50px;
    background-color: #1F939B;
    border-radius: 10px 0 10px 0;
    box-shadow: 0px 5px 15px 0px #1F939B;
    cursor: pointer;
    -webkit-animation-name: ${appearance}; 
    animation-name: ${appearance};
    -webikt-animation-duration: 1000ms;
    animation-duration: 1000ms;

    &:hover {
        background: #37a8b0;
        transform: scale(1.05);
    }
`