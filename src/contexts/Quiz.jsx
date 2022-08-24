import { createContext, useState } from "react"

const QuizContext = createContext({})

const QuizContextProvider = ({ children }) => {

  const [quiz, setQuiz] = useState({})
  const [infos, setInfos] = useState({})
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [step, setStep] = useState(4)

  const value = {
    step,
    setStep
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