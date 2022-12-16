import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 20px 20px 0;
    background: rgb(38, 39, 43);
    background: linear-gradient(0deg, rgba(38, 39, 43,1) 0%, rgba(38, 39, 43,1) 97%, rgba(250,251,255,1) 100%);  
`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 33vw;
    text-align: center;
`

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 33vw;

    p {
        color: #1F939B;
        font-weight: bold;
        font-size: 12px;
    }
`

export const CopyrightContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 12px;
`


export const Bar = styled.div`
    height: 1px;
    width: 80%;
    background: white;
    margin: 30px 0 50px;
`

export const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 30px 20px;
`

export const Link = styled.a`
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`

export const Link1 = styled.a`
    font-family: sans-serif;
    font-size: 14px;
    text-decoration: none;
    color: white;
    position: relative;
    margin-bottom: 15px;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        background: white;
        width: 100%;
        height: 1px;
        bottom: 0;
        transform-origin: 100% 0;
        transform: scaleX(0);
        transition: transform 0.4s;
    }

    &:hover::before {
        bottom: 0;
        transform-origin: 0 0;
        transform: scaleX(1);
    }
`

export const VerticalBar = styled.div`
    height: 50px;
    width: 1px;
    background: white;
    margin-bottom: 30px;
`