import React from "react"
import styled from "styled-components"

import People from "../../assets/images/people.jpg"
import Button from "../quiz-interface/core/Button"

const Container = styled.div`
    height: 100vh;
    background-image: url(${People});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
`

const BoxSlogan = styled.div`
    top: 30%;
    left: 25%;
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
        font-size: 40px;
        font-weight: 600;
        color: white;
    }
`

const BoxDiscover = styled.div`
    top: 25%;
    left: 50%;
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

const ButtonDiscover = styled.div`
    padding; 10px 15px;
    font-family: "Henny Penny";
`


const Header = () => {
  return (
    <Container>
        <BoxSlogan>
            <p>Animez vos soirées entre amis</p>
        </BoxSlogan>
        <BoxDiscover>
            <Button>Découvrir</Button>
        </BoxDiscover>
    </Container>
  )
}

export default Header