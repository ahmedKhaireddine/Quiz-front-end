import { useEffect, useState, useContext } from "react"

import { QuizContext } from "../../contexts/Quiz"
import Questions from "../../questions.json"
import ChoiceList from "./core/ChoiceList"
import { useTimer } from "../../hooks/useTimer"

const Quiz = () => {
  const { step, setStep, answers, setAnswers } = useContext(QuizContext)
  // Valeur de chaque réponse(objet qui contiendra l'id de la question, l'id et le weight de la réponse sélectionnée)
  const [answerSelected, setAnswerSelected] = useState({
    weight: 0
  })
  const [index, setIndex] = useState(0)
  const { time, start } = useTimer({
    onTimeOver: () => {
      if(index < Questions.length) {
        setIndex(index => index + 1)
      }
    },
    order: "DECREMENTAL"
  })
  const { id, choices, title } = Questions[index]

  // console.log("valeur de answerSelected :", answerSelected)

  console.log("index :", index)
  // console.log("Questions: ", Questions)
  console.log("id :", id)

  const saveAnswer = () => {
    if (index < Questions.length) {
      setAnswers([
        ...answers, answerSelected
      ])
      setAnswerSelected({
        weight: 0
      })
      if (index < Questions.length -1) {
        setIndex(index + 1)
      } else {
        setStep(4)
      } 
    } 
  }

  const timeOver = () => {
    
  }

  // useEffect(() => {
  //   start(Questions[index].duration)
  // }, [index, start])

  return (
    <div>
      <h1>Timer {time}</h1>
      <h2>{index + 1}. {title}</h2>
      <ChoiceList
        choices={choices}
        answerSelected={answerSelected}
        setAnswerSelected={setAnswerSelected}
        questionId={id}
      />
      <button onClick={() => saveAnswer()}>Question suivante</button>
    </div>
  )
}

export default Quiz