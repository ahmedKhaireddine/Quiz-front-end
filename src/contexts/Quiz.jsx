import { createContext, useState } from "react"
import { useScoreCalculator } from "../hooks/useScoreCalculator"

const QuizContext = createContext({})

const QuizContextProvider = ({ children }) => {

  const [quiz, setQuiz] = useState({})
  const [infos, setInfos] = useState({})
  const [answers, setAnswers] = useState([])
  const [step, setStep] = useState(3)
  const score = useScoreCalculator(answers)

  const value = {
<<<<<<< HEAD
    answers,
    setStep,
    setAnswers,
=======
    score,
    setStep,
>>>>>>> 7f250c905857e3ef3e25f4af772f19077d4c4bc1
    step
  }

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}

export {
  QuizContext,
  QuizContextProvider
}