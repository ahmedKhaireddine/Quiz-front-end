import { useEffect, useState, useContext } from "react"

import { QuizContext } from "../../contexts/Quiz"
import Questions from "../../questions.json"
import ChoiceList from "./core/ChoiceList"
import { useTimer } from "../../hooks/useTimer"

const Quiz = (props) => {
  const { step } = useContext(QuizContext)
  const [index, setIndex] = useState(0)
  const { time, start } = useTimer({
    onTimeOver: () => {
      if(index < Questions.length) {
        setIndex(index => index + 1)
      }
    },
    order: "DECREMENTAL"
  })
  const { choices, title } = Questions[index]
  // const { answers } = useContext(QuizContext)

  const nextQuestion = () => {

    // Condition qui vérifie si au moins une question a été selectionnée

    // Condition qui vérifie si le temps est écoulé

  }

  // useEffect(() => {
  //   start(Questions[index].duration)
  // }, [index, start])

  return (
    <div>
      <h1>Timer {time}</h1>
      <h2>{index + 1}. {title}</h2>
      <ChoiceList choices={choices}/>
      <button onClick={() => setIndex(index + 1)}>Question suivante</button>
    </div>
  )
}

export default Quiz