import React from "react"

import Navbar from "./Navbar"
import { Button, ButtonContainer, Container, List, ListContainer, SloganContainer} from "../../styles/Home/HeaderStyled"
import { Title } from "../../styles/Home/GlobalStyled"
import { ImArrowRight } from "react-icons/im"
import { BsCheckLg } from "react-icons/bs"
import { MdOutlineCreditCardOff } from "react-icons/md"
import CreditCard from "../../assets/images/credit-card.png"

const Header = () => {
  return (
    <Container>
      <Navbar/>
        <SloganContainer>
          <Title>Créez votre questionnaire en ligne</Title>
          <p>Concevez, diffusez et analysez facilement votre questionnaire en ligne selon vos besoins : satisfaction, formation, ressources humaines, scolarité...</p>
          <ButtonContainer>
            <a href="#description">
              <Button>Lancez vous, c’est gratuit !<span><ImArrowRight /></span></Button>
            </a>
          </ButtonContainer>
          <ListContainer>
            <List>
              <BsCheckLg color="#777" size={22} /><span>&nbsp; Accès immédiat</span>
            </List>
            <List>
              <MdOutlineCreditCardOff color="#777" size={22} /><span>&nbsp; Totalement gratuit</span>
            </List>
          </ListContainer>
        </SloganContainer>
    </Container>
  )
}

export default Header