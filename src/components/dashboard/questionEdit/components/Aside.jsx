import React from 'react'

import { Title, Subtitle } from '../../../../styles/dashboard/questionEdit/QuestionEditStyled'
import { Box } from "../../../../styles/dashboard/questionEdit/AsideStyled"

const Aside = (answers) => {
  return (
    <Box>
      {/* <Title>Aside</Title> */}

      <Title margin="20px 0">Thème</Title>
      <p>Histoire</p>

      <Title margin="20px 0">Question</Title>
      <p>Quand a eu lieu le Big Bang ?</p>

      <Title margin="20px 0">Réponses</Title>
      <ul>
        {/* {answers.length === 0 && <p>Aucune réponse</p>}
          {answers.map((id, content) => {
            return <li key={id}>{content}</li>;
          })} */}
        <li><span>1:&nbsp;</span>Il y a 4 milliards d'années</li>
        <li><span>2:&nbsp;</span>Le jour où mon patron a refusé de m'augmenter</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
        <li><span>3:&nbsp;</span>Il y a 10 milliards d'années</li>
      </ul>

      <Title>Temps pour répondre :</Title>


    </Box>
  )
}

export default Aside