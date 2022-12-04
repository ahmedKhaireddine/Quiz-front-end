import React from "react"

import Flex from "../layouts/Flex"
import { Title } from "../../styles/Home/GlobalStyled"
import { FirstArticleContainer } from "../../styles/Home/FirstArticleStyled"

const FirstArticle = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      background="#F5F5F6"
    >  
      <FirstArticleContainer>
        <Title>Créer un questionnaire en quelques clics</Title>
        <p>Avec QUIZ, il est très facile de créer un questionnaire sur mesure grâce à 
          des dizaines de types de questions sur des thèmes différents, des outils et 
          des fonctionnalités avancées pour créer,éditer et supprimez un quiz.
      </p>
      </FirstArticleContainer>
    </Flex>
  )
}

export default FirstArticle