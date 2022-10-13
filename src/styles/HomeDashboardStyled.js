import styled from "styled-components"
import people from "../assets/images/people.jpg"
import tab from "../assets/images/1155173.svg"

// ---------- Header ---------- //
export const Container = styled.div`
    height: 100vh;
    background-image: url(${people});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
`

export const BoxSlogan = styled.div`
    top: 28%;
    left: 16%;
    height: 250px;
    width: 400px;
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
        font-size: 40px;
        font-weight: 600;
        color: white;
    }
`

export const BoxDiscover = styled.div`
    top: 18%;
    left: 38%;
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

// ---------- FirstArticle ---------- //

export const ContainerArticle = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Text = styled.div`
    height: 80vh;
    width: 80vw;
    background-color: #BABABA;
    padding: ${props => props.padding};
    border-radius: 5px;
    display: flex;
    align-items: center;

    p {
        font-size: 40px;
        color: white;
    }
`

export const Image = styled.div`
    height: 70vh;
    width: 40vw;
    position: absolute;
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
    background-image: url(${tab});
    background-size: cover;
    background-position: center;
`