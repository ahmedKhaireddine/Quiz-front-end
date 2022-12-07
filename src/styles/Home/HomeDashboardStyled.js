import styled from "styled-components"
import tablet from "../../assets/images/tablet.svg"

// ---------- Global ---------- //

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
    box-shadow: 20px 20px 36px #cccccc,
                -20px -20px 36px #f4f4f4;
    display: flex;
    align-items: center;

    p {
        font-size: 36px;
        color: white;
        text-align: center;
    }
`