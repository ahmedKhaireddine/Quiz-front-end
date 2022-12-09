import styled from "styled-components";

import people from "../../assets/images/people.jpg";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${people});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
`

export const SloganContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    z-index: 1;
    background: inherit;
    padding: 30px 20px;
    display: flex;
    position: relative;
    top: 12%;
    left: 12%;
    text-align: center;
    // background: black;
    
    h2 {
        margin: 0;
        font-size: 45px;
        line-height: 50px;
        font-weight: bold;
        color: #1F939B;
    }

    &::before {
        content: "";
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        z-index: -1;
        inset: 0;
        filter: blur(8px);
    }
    
    p {
        margin: 30px 0;
        font-size: 18px;
        color: white;
    }
`

export const ButtonContainer = styled.div`
    width: 254px; 
    display: flex;
    flex-direction: column;
`

export const Button = styled.a`
    width: 234px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 12px 20px;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    background: linear-gradient(0deg, rgba(19, 113, 120, 1) 0%, rgba(87, 204, 212, 1) 100%);

    span {
        display: none;
    }

    &:hover {
        width: 254px;
        span {
            display: inline-block;
        }
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

export const List = styled.div`
    display: flex;
    margin-top: 10px;

    span {
        color: #777;
        font-size: 14px;
    }
`

