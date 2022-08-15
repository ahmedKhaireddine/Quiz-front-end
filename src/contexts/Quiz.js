import { createContext, useState } from "react"

const QuizContext = createContext({})

const QuizContextProvider = (props) => {

  const [quiz, setQuiz] = useState({})
  const [infos, setInfos] = useState({})
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [step, setStep] = useState(0)

  const value = {}

  return (
    <QuizContext.Provider value={value}>
      {props.children}
    </QuizContext.Provider>
  )
}

export {
  QuizContext,
  QuizContextProvider
}