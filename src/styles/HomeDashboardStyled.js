import styled from "styled-components"
import people from "../assets/images/people.jpg"
import tablet from "../assets/images/tablet.svg"

// ---------- Header ---------- //
export const Container = styled.div`
    height: 100vh;
    background-image: url(${people});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
`

export const Nav = styled.div`
    height: 70px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Link1 = styled.a`
    font-family: sans-serif;
    font-size: 27px;
    text-decoration: none;
    color: #F1F1F1;
    position: relative;
    margin-right: 70px;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        background: #F1F1F1;
        width: 100%;
        height: 2px;
        bottom: 0;
        transform-origin: 100% 0;
        transform: scaleX(0);
        transition: transform 0.4s;
    }

    &:hover::before {
        transform-origin: 0 0;
        transform: scaleX(1);
    }
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
    color: #F1F1F1;
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

export const BoxSlogan = styled.div`
    top: 27%;
    left: 20%;
    height: 275px;
    width: 450px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    padding: 0 20px;
    display: flex;
    align-items: center;
    text-align: center;

    &::before {
        content: "";
        position: absolute;
        background: inherit;
        z-index: -1;
        inset: 0;
        filter: blur(8px);
    }
    
    p {
        font-family: "Henny Penny";
        letter-spacing: 1px;
        font-size: 45px;
        font-weight: 600;
        color: white;
}
    }
`

export const BoxDiscover = styled.div`
    top: 15%;
    left: 43%;
    height: 150px;
    width: 250px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        background: inherit;
        z-index: -1;
        inset: 0;
        filter: blur(8px);
    }
`

export const Button = styled.a`
    width: 190px;
    height: 50px;
    color: #fff;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: center;
    line-height: 50px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    padding: 0;
    border: none;
    border-radius: 5px;
    background: #1f939b;
    background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);

    :hover {
        color: #72e0e8;
        background: transparent;
    }

    &::before, ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 2px;
        width: 0;
        background: #37a8b0;
        box-shadow:
        -1px -1px 5px 0px #fff,
        7px 7px 20px 0px #0003,
        4px 4px 5px 0px #0002;
        transition: 400ms ease all;
    }

    &::before {
        right: inherit;
        top: inherit;
        left: 0;
        bottom: 0;
    }

    &:hover::before, :hover::after {
        width: 100%;
        transition: 800ms ease all;
    }
`

// ---------- FirstArticle ---------- //

export const Image = styled.div`
    height: 60vh;
    width: 35vw;
    position: absolute;
    right: ${props => props.right};
    left: ${props => props.left};
    background-image: ${props => props.image};
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`

export const Section = styled.div`
    height: 50vh;
    width: 50vw;
    // background-image: url(${tablet});
    // background-size: cover;
    // background-position: center;
`

export const Text = styled.div`
    height: 70vh;
    width: 70vw;
    background-color: #BABABA;
    padding: ${props => props.padding};
    border-radius: 5px;
    box-shadow:  20px 20px 36px #cccccc,
             -20px -20px 36px #f4f4f4;
    display: flex;
    align-items: center;

    p {
        font-size: 36px;
        color: white;
        text-align: center;
    }
`

// ---------- ScrollTop ---------- //

export const Arrow = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;

    .icone {
        width: 35px;
    }
`

// ---------- Footer ---------- //

export const FooterContainer = styled.div`
    height: 250px;
    width: 100vw;
    background: #dbd9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LinkContainer = styled.div`
    height: 250px;
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const LinkSection = styled.div`
    width: 170px;
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin};
    
    h3 {
        text-align: center;
        font-size: 25px;
        font-weight: 600;
        margin: 40px 0 25px 0;
    }

    a {
        margin-bottom: 10px;
    }
`





export const BottomSection = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`