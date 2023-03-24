import React from 'react'

import { Title } from '../../../../styles/dashboard/questionEdit/QuestionEditStyled'
import { Box } from "../../../../styles/dashboard/questionEdit/AsideStyled"

const Aside = () => {
  return (
    <Box>

      <Title margin="20px 0">Thème</Title>
      <p>Histoire</p>

      <Title margin="20px 0">Question</Title>
      <p>Quand a eu lieu le Big Bang ?</p>

      <Title margin="20px 0">Réponses</Title>
      <ul>
        <li key="1"><span>1:&nbsp;</span>Il y a 4 milliards d'années</li>
      </ul>

      <Title>Temps pour répondre :</Title>


    </Box>
  )
}

export default Aside