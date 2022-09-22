import React from 'react'

import { Stars } from "../styles/StarsListStyled"

const StarsList = () => {
  return (
    <Stars>
        {Array(8).fill().map((el, index) => <li key={index}>✮</li>)}
    </Stars>
  )
}

export default StarsList