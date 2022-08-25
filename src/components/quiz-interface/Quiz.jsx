import { useContext, useState } from "react"
import { QuizContext } from "../../contexts/Quiz"

import Questions from "../../questions.json"
import ChoiceList from "./core/ChoiceList"

const Quiz = (props) => {
  const [index, setIndex] = useState(0)
  const { choices, title } = Questions[index]
  const { answers } = useContext(QuizContext)

  const nextQuestion = () => {

  }

  return (
    <div>
      <h2>{index + 1}. {title}</h2>
      <ChoiceList choices={choices}/>
      <button onClick={() => setIndex(index + 1)}>Question suivante</button>
    </div>
  )
}

export default Quiz