import React from "react"
import { useContext, useCallback, useEffect, useState } from "react"

import Button from "./core/Button"
import ChoiceList from "./core/ChoiceList"
import Logo from "../Logo"
import Questions from "../../questions.json"
import { QuizContext } from "../../contexts/Quiz"
import { Index, Question, QuizContainer, Timer, Text } from "../../styles/QuizStyled"
import { useTimer } from "../../hooks/useTimer"

const Quiz = (props) => {
  const { answers, setAnswers, step, setStep, setQuiz } = useContext(QuizContext)
  const [answerSelected, setAnswerSelected] = useState({
    answerId: "",
    questionId: "",
    weight: 0
   })
  const [index, setIndex] = useState(0)
  const { time, start } = useTimer({
    onTimeOver: () => handleTimeOver(),
    order: "DECREMENTAL"
  })

  const { choices, id, title } = Questions[index]

  const handleTimeOver = useCallback(() => {
    setAnswers([...answers, answerSelected])
    setAnswerSelected({
      answerId: "",
      questionId: "",
      weight: 0
    })

    if(index < Questions.length - 1)
      setIndex(index => index + 1)
    else
      setStep(4)
  }, [answers, answerSelected, index, setAnswers, setIndex, setStep])

  const saveAnswer = useCallback(() => {
    if (index < Questions.length) {
      setAnswers([...answers, answerSelected])
      setAnswerSelected({
        answerId: "",
        questionId: "",
        weight: 0
      })

      if (index < Questions.length - 1)
        setIndex(index + 1)
      else
        setStep(4)
    }
  }, [answers, answerSelected, index, setAnswers, setIndex, setAnswerSelected, setStep])

  // const handleTimeOver = () => {
  //   if(index < Questions.length) {
  //     setAnswers([
  //       ...answers, answerSelected
  //     ])
  //     setIndex(index => index + 1)
  //   } else {
  //     setStep(4)
  //   }
  // }

  // useEffect(() => {
  //   start(Questions[index].duration)
  // }, [index, start])

  return (
    <QuizContainer>
      <Logo margin="0px 0px 50px 0px" size="50px" color="#45DDE7"/>
      <Question>
        <Timer>
          <Text>✨{time}✨</Text>
        </Timer>
        {title}
      </Question>
      <ChoiceList
        answerSelected={answerSelected}
        choices={choices}
        handleClick={setAnswerSelected}
        questionId={id}
      />
      <Button handleClick={() => saveAnswer()}>Question suivante</Button>
      <Index>{index + 1} / {Questions.length}</Index>
    </QuizContainer>
  )
}

export default Quiz