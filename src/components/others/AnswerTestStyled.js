import styled from "styled-components";f

export const Answer = styled.div`
    postion: relative;
    color: white;
    display: block;
    border: 2px solid white;
    overflow: hidden;
    transition: 1s all ease;

    &:before {
        background: "green";
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.5s ease;
        width: 120%;
        height: 0%;
        transform: rotate(25deg);   
    }

    &:hover:before {
        height: 180%;
    }
`