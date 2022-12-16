import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 300px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(38, 39, 43);
    background: linear-gradient(0deg, rgba(38, 39, 43,1) 0%, rgba(38, 39, 43,1) 97%, rgba(250,251,255,1) 100%);  

    hr {
        width: 80%; 
        border-top-color: #bbb;
        margin: 50px auto 0;
        opacity: 0.5;
    }
`

export const LinkContainer = styled.div`
    height: 200px;
    width: 100vw;
    display: flex;
    justify-content: center;
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
        bottom: -4px;
        transform-origin: 0 0;
        transform: scaleX(1);
    }
`

export const ColumnContainer = styled.div`
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin};
    
    h3 {
        text-align: center;
        font-size: 27px;
        font-weight: 600;
        color: #c2c0c0;
        margin: 50px 0 25px 0;
    }
`

export const LeftContainer = styled.div`
    p {
        margin-bottom: 10px;
    }
    
    a {
        color: #737373;
        position: relative;

        :hover {
            color: #e6e6eb;
        }

        &::before {
            width: 100%;
            height: 2px;
            content: "";
            position: absolute;
            background: #F1F1F1;
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

export const RightContainer = styled.div`
`

export const LogoSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    img {
        width: 45px;
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
    font-size: 12px;
    color: #e3e1e1;
`