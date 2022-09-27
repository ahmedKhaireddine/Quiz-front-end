import React from "react"

import BubblesAnimated from "../components/BubblesAnimated"
import { QuizContextProvider } from "../contexts/Quiz"
import CenteredElementsLayout from "../components/layouts/CenteredElementsLayout"
import Stepper from "../components/quiz-interface/core/Stepper"

const QuizInterface = () => {
  return (
    <QuizContextProvider>
      <CenteredElementsLayout>
        <Stepper />
        <BubblesAnimated/>
      </CenteredElementsLayout>
    </QuizContextProvider>
  )
}

export default QuizInterface