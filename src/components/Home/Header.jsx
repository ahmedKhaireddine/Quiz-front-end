import React from "react"

import Navbar from "./Navbar"
import { SloganContainer, Button, Container } from "../../styles/Home/HeaderStyled"
import { Title } from "../../styles/Home/GlobalStyled"
import { ImArrowRight } from "react-icons/im"

const Header = () => {
  return (
    <Container>
      <Navbar/>
        <SloganContainer>
          <Title>Créez votre questionnaire en ligne</Title>
          <p>Concevez, diffusez et analysez facilement votre questionnaire en ligne selon vos besoins : satisfaction, formation, ressources humaines, scolarité...</p>
          <a href="#description">
            <Button>Lancez vous, c’est gratuit !<span><ImArrowRight /></span></Button>
          </a>
        </SloganContainer>
    </Container>
  )
}

export default Header