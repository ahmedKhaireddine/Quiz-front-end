import React, { useState } from "react"

import { 
  BackgroundContainer, 
  Button, 
  ButtonContainer, 
  LeftContainer, 
  HeaderContainer, 
  Illustration1,
  Illustration2,
  Illustration3,
  Illustration4,
  Illustration5,
  List, 
  ListContainer,
  RightContainer,
  SloganCard
} from "./Header1Styled"
import { Title } from "./../styles/Home/GlobalStyled"
import { ImArrowRight } from "react-icons/im"
import { BsCheckLg } from "react-icons/bs"
import { MdOutlineCreditCardOff } from "react-icons/md"
import Navbar from "../components/Home/Navbar"

const Header1 = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <BackgroundContainer>

        <LeftContainer>
          <SloganCard>
            <Title>Créez votre questionnaire en ligne</Title>

            <p>Concevez, diffusez et analysez facilement votre questionnaire en ligne selon vos besoins : satisfaction, formation, ressources humaines, scolarité...</p>
            
            <ButtonContainer>
              <a href="#description">
                <Button>
                  Lancez vous, c’est gratuit !
                  {/* <span><ImArrowRight /></span> */}
                </Button>
              </a>
            </ButtonContainer>

            <ListContainer>
              <List>
                <BsCheckLg color="#777" size={16} /><span>&nbsp; Accès immédiat</span>
              </List>
              <List>
                <MdOutlineCreditCardOff color="#777" size={16} /><span>&nbsp; Totalement gratuit</span>
              </List>
            </ListContainer>
          </SloganCard>

        </LeftContainer>

        <RightContainer>
            <Illustration1 />
            <Illustration2 />
            <Illustration3 />
            <Illustration4 />
            <Illustration5 />
        </RightContainer>

      </BackgroundContainer>

    </HeaderContainer>
  )
}

export default Header1