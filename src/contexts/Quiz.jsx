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
    score,
    setStep,
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