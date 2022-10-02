import { useColorModeValue } from "@chakra-ui/react"
import React from "react"

import bubbles from "../bubbles.json"
import { Bubble, BubblesContainer } from "../styles/BubblesAnimatedStyled"

const BubblesAnimated = () => {
  const bg = useColorModeValue("rgba(31, 147, 155, 0.3)", "rgba(136, 246, 251, 0.3)")

  const BubblesJSX = bubbles.map((element, index) => {
    return <Bubble
      bg={bg}
      bubbleFloatDelay={element["bubble-float-delay"]}
      bubbleFloatDuration={element["bubble-float-duration"]}
      bubbleLeftOffset={element["bubble-left-offset"]}
      bubbleRadius={element["bubble-radius"]}
      bubbleSwayDelay={element["bubble-sway-delay"]}
      bubbleSwayDuration={element["bubble-sway-duration"]}
      bubbleSwayType={element["bubble-sway-type"]}
      key={index}
    ></Bubble>
  })

  return <BubblesContainer>{BubblesJSX}</BubblesContainer>
}

export default BubblesAnimated