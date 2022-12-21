import React, { useRef } from "react"

import { 
  Button, 
  ButtonContainer,
  DescriptionContainer, 
  LeftContainer, 
  HeaderContainer, 
  Illustration1,
  Illustration2,
  Illustration3,
  Illustration4,
  Illustration5,
  Item,
  ListContainer,
  RightContainer,
  Spacer,
  SpanContainer,
  Title2
} from "../../styles/home/HeaderStyled"
import { ImArrowRight } from "react-icons/im"
import { BsCheckLg } from "react-icons/bs"
import { MdOutlineCreditCardOff } from "react-icons/md"

const Header2 = ({ myRef }) => {

  const scrollToSection = () => {
    myRef.current.scrollIntoView()
    console.log("scroll")
  }

  return (
    <HeaderContainer>
        <LeftContainer>
          <Title2>
            <SpanContainer>
              <span>Créez votre &nbsp;</span>
            </SpanContainer>
            <SpanContainer>
              <span>questionnaire en &nbsp;</span>
            </SpanContainer>
            <SpanContainer>
              <span>ligne &nbsp;</span>
            </SpanContainer>
          </Title2>
          <Spacer />
          <DescriptionContainer>
            <p>Concevez, diffusez et analysez facilement votre questionnaire en ligne selon vos besoins : satisfaction, formation, ressources humaines, scolarité...</p>
            <Spacer />
            <ButtonContainer>
              <Button onClick={scrollToSection}>
                Lancez vous, c’est gratuit !
                <span><ImArrowRight /></span>
              </Button>
            </ButtonContainer>  
            <ListContainer>
              <Item>
                <BsCheckLg color="#777" size={16} /><span>&nbsp; Accès immédiat</span>
              </Item>
              <Item>
                <MdOutlineCreditCardOff color="#777" size={16} /><span>&nbsp; Totalement gratuit</span>
              </Item>
            </ListContainer>
          </DescriptionContainer> 
        </LeftContainer>

        <RightContainer>
            <Illustration1 />
            <Illustration2 />
            <Illustration3 />
            <Illustration4 />
            <Illustration5 />
        </RightContainer>
    </HeaderContainer>
  )
}

export default Header2