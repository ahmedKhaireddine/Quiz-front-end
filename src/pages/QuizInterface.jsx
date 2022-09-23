import { QuizContextProvider } from "../contexts/Quiz"
import QuizLayout from "../components/layouts/QuizLayout"
import Stepper from "../components/quiz-interface/core/Stepper"
import BubblesAnimated from "../components/BubblesAnimated"

const QuizInterface = () => {
  return (
    <QuizContextProvider>
      <QuizLayout>
        <Stepper />
        <BubblesAnimated/>
      </QuizLayout>
    </QuizContextProvider>
  )
}

export default QuizInterface