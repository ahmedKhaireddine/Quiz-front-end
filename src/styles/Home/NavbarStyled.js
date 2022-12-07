import styled from "styled-components"

export const Nav = styled.div`
    height: 70px;
    width: 100vw;
    padding-left: 70px;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Link2 = styled.a`
    font-family: staatliches;
    font-size: 27px;
    color: #F1F1F1;
    position: relative;
    margin-right: 70px;
    cursor: pointer;
    overflow: hidden;

    .span {
        padding: 10px;
        display: inline-block;
        transition: transform 0.3s esae-out;
        -webkit-transition: transform 0.3s esae-out;
    }

    .span:nth-child(2) {
        position: absolute;
        width: 100%;
        text-align: center;
        left: 100%;
    }

    &:hover .span {
        transform: translateX(-100%);
    }

`

export const Link3 = styled.a`
    font-size: 27px;
    text-decoration: none;
    color: #f1f1f1;
    position: relative;
    margin-right: 70px;
    cursor: pointer;

    &::before, 
    ::after {
        content: "";
        position: absolute;
        background: #F1F1F1;
        height: 2px;
        opacity: 0;
        left: 50%;
        transform: translate(-50%, 10px);
        transition: all 0.2s ease-in-out;
    }

    &::before {
        width: 80%;
        bottom: 0;
    }

    &::after {
        width: 50%;
        bottom: -6px;
    }

    &:hover::before, 
    :hover::after {
        opacity: 1;
        transform: translate(-50%, 0px);
    }

    &::before, 
    :hover::after {
        transition-delay: 0.1s;
    }

    &:hover::before {
        transition-delay: 0s;
    }
`