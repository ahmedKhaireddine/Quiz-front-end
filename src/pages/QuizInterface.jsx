import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import BubblesAnimated from "../components/BubblesAnimated"
import { QuizContextProvider } from "../contexts/Quiz"
import Flex from "../components/layouts/Flex"
import Stepper from "../components/quiz-interface/core/Stepper"
import ToggleMode from "../components/ToggleMode"

const QuizInterface = () => {
  const color = useColorModeValue("black", "white")

  return (
    <QuizContextProvider>
      <Flex
        alignItems="center"
        background=""
        color={color}
        flexDirection="column"
        height="100vh"
        justifyContent="center"
        width="100vw"
      >
        <ToggleMode />
        <Stepper />
        <BubblesAnimated/>
      </Flex>
    </QuizContextProvider>
  )
}

export default QuizInterface