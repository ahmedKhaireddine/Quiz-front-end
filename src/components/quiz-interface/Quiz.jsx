import { useContext, useCallback, useEffect, useState } from "react"

import Button from "./core/Button"
import ChoiceList from "./core/ChoiceList"
import Logo from "../Logo"
import Questions from "../../questions.json"
import { QuizContext } from "../../contexts/Quiz"
import {  Index,  Question, QuizContainer, Timer, Text } from "../../styles/QuizStyled"
import { useTimer } from "../../hooks/useTimer"


const Quiz = (props) => {
  const { answers, setAnswers, step, setStep } = useContext(QuizContext)
  const [answerSelected, setAnswerSelected] = useState({ weight: 1 })
  const [index, setIndex] = useState(0)
  const { time, start } = useTimer({
    onTimeOver: () => handleTimeOver(),
    order: "DECREMENTAL"
  })

  const { choices, title } = Questions[index]

  const handleTimeOver = useCallback(() => {
    setAnswers([...answers, answerSelected])
    if(index < Questions.length - 1) {
      setIndex(index => index + 1)
    } else {
      setStep(4)
    }
  }, [answers, answerSelected, index, setAnswers, setIndex, setStep])

  useEffect(() => {
    start(Questions[index].duration)
  }, [index, start])

  return (
    <QuizContainer>
      <Logo margin="0px 0px 50px 0px" size="50px" color="#45DDE7"/>
      <Question>
        <Timer><Text>✨{time}✨</Text></Timer>
        {title}
      </Question>
      <ChoiceList choices={choices}/>
      <Button handleClick={() => setIndex(index + 1)}>Question suivante</Button>
      <Index>{index + 1} / {Questions.length}</Index>
    </QuizContainer>
  )
}

export default Quiz