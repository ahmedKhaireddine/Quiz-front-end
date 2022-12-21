import styled from "styled-components"

export const Nav = styled.nav`
    height: 55px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    background-color: #F5F5F6;
    padding-left: 50px;
    -webkit-box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 18%); 
    box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 18%);
    z-index: 10;
    position: fixed;
    top: 0;
`

export const Link3 = styled.a`
    position: relative;
    font-size: 16px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    margin-right: 55px;

    &::before, 
    ::after {
        height: 2px;
        content: "";
        position: absolute;
        left: 50%;
        background: rgba(0,0,0,0.4);
        transform: translate(-50%, 10px);
        transition: all 0.2s ease-in-out;
        opacity: 0;
    }

    &::before {
        width: 80%;
        bottom: -2px;
    }

    &::after {
        width: 50%;
        bottom: -8px;
    }

    &:hover::before, 
    :hover::after {
        transform: translate(-50%, 0px);
        opacity: 1;
    }

    &::before, 
    :hover::after {
        transition-delay: 0.1s;
    }

    &:hover::before {
        transition-delay: 0s;
    }
`