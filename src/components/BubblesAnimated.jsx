import React from "react"

import bubbles from "../bubbles.json"
import { Bubble, BubblesContainer } from "../styles/BubblesAnimatedStyled"

const BubblesAnimated = () => {
  const BubblesJSX = bubbles.map((element, index) => {
    return <Bubble
      key={index}
      bubbleFloatDelay={element["bubble-float-delay"]}
      bubbleFloatDuration={element["bubble-float-duration"]}
      bubbleLeftOffset={element["bubble-left-offset"]}
      bubbleRadius={element["bubble-radius"]}
      bubbleSwayDuration={element["bubble-sway-duration"]}
      bubbleSwayDelay={element["bubble-sway-delay"]}
      bubbleSwayType={element["bubble-sway-type"]}
    ></Bubble>
  })

  return <BubblesContainer>{BubblesJSX}</BubblesContainer>
}

export default BubblesAnimated