import { createContext, useState } from "react"

import { useScoreCalculator } from "../hooks"

const QuizContext = createContext({})

const QuizContextProvider = ({ children }) => {
  const [answers, setAnswers] = useState([])
  const [infos, setInfos] = useState({})
  const [quiz, setQuiz] = useState({})
  const [step, setStep] = useState(1)

  const score = useScoreCalculator(answers)

  const value = {
    answers,
    infos,
    quiz,
    score,
    setAnswers,
    setInfos,
    setQuiz,
    setStep,
    step,
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