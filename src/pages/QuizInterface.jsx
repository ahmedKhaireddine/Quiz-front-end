import React from "react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import BubblesAnimated from "../components/BubblesAnimated"
import Flex from "../components/layouts/Flex"
import { QuizContextProvider } from "../contexts/Quiz"
import Stepper from "../components/quiz-interface/core/Stepper"
import ToggleMode from "../components/ToggleMode"

const QuizInterface = () => {
  const color = useColorModeValue("black", "white")

  return (
    <QuizContextProvider>
      <Flex
        alignItems= "center"
        color={color}
        flexDirection= "column"
        height= "100vh"
        justifyContent= "center"
        width= "100vw"
      >
        <ToggleMode />
        <Stepper />
        <BubblesAnimated/>
      </Flex>
    </QuizContextProvider>
  )
}

export default QuizInterface