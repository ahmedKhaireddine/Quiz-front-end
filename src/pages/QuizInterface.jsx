import React from "react"

import { QuizContextProvider } from "../contexts/Quiz"
import Stepper from "../components/quiz-interface/Stepper"

const QuizInterface = () => {
  return (
    <QuizContextProvider>
      <Stepper />
    </QuizContextProvider>
  )
}

export default QuizInterface