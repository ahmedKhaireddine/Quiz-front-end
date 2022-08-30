import { useState, useContext } from "react"

import { QuizContext } from "../../contexts/Quiz"
import Questions from "../../questions.json"
import ChoiceList from "./core/ChoiceList"

const Quiz = () => {
  const [index, setIndex] = useState(0)
  const { choices, title } = Questions[index]
  const [choice, setChoice] = useState()
  const { answer } = useContext(QuizContext)

  const nextQuestion = () => {
  }

  return (
    <div>
      <h2>{index + 1}. {title}</h2>
      <ChoiceList choices={choices}/>
      <button onClick={() => setIndex(index + 1)}>Question suivant</button>
    </div>
  )
}

export default Quiz