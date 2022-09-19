import { QuizContextProvider } from "../contexts/Quiz"
import QuizLayout from "../components/layouts/QuizLayout"
import Stepper from "../components/quiz-interface/core/Stepper"

const QuizInterface = () => {
  return (
    <QuizContextProvider>
      <QuizLayout>
        <Stepper />
      </QuizLayout>
    </QuizContextProvider>
  )
}

export default QuizInterface