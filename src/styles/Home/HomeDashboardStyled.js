import styled from "styled-components"
import tablet from "../../assets/images/tablet.svg"

// ---------- Header ---------- //

export const Nav = styled.div`
    height: 70px;
    width: 100vw;
    padding-left: 70px;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Link1 = styled.a`
    font-family: sans-serif;
    font-size: ${props => props.size};
    text-decoration: none;
    color: ${props => props.color || "#F1F1F1"};
    position: relative;
    margin-right: ${props => props.marginRight};
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        background: #F1F1F1;
        width: 100%;
        height: ${props => props.heightBefore || "2px"};
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

// ---------- Footer ---------- //

export const FooterContainer = styled.div`
    height: 300px;
    width: 100vw;
    background: rgb(38, 39, 43);
    background: linear-gradient(0deg, rgba(38, 39, 43,1) 0%, rgba(38, 39, 43,1) 97%, rgba(250,251,255,1) 100%);  
    display: flex;
    flex-direction: column;
    justify-content: center;

    hr {
        width: 80%; 
        border-top-color:#bbb;
        opacity: 0.5;
        margin: 50px auto 0;
    }
`

export const LinkContainer = styled.div`
    height: 200px;
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const LinkSection = styled.div`
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin};
    
    h3 {
        text-align: center;
        font-size: 27px;
        font-weight: 600;
        margin: 50px 0 25px 0;
        color: #c2c0c0;
    }

    a {
        margin-bottom: 10px;
        color: #737373;
        position: relative;

        :hover {
            color: #e6e6eb;
        }

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
    }
`

export const LogoSection = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        width: 50px;
    }

    a:hover {
        transform: scale(1.1);
    }
`

export const BottomSection = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e3e1e1;
`