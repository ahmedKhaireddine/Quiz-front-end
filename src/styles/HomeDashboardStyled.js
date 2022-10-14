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
    background: #45dde7;
    background: linear-gradient(0deg, rgba(69, 220, 231, 1) 0%, rgba(114, 224, 232, 1) 100%);

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
        background: #72e0e8;
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
