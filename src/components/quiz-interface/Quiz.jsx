import { useCallback, useContext, useEffect, useState } from "react"

import Button from "./core/Button"
import ChoiceList from "./core/ChoiceList"
import Logo from "../Logo"
import { Index, Question, QuizContainer, Text, Timer } from "../../styles/QuizStyled"
import { QuizContext } from "../../contexts/Quiz"
import { useTimer } from "../../hooks/useTimer"

const Quiz = (props) => {
  const { answers, quiz, setAnswers, setStep } = useContext(QuizContext)
  const [answerSelected, setAnswerSelected] = useState({
    answerId: "",
    questionId: "",
    weight: 0
   })
  const [index, setIndex] = useState(0)
  const { start, time } = useTimer({
    onTimeOver: () => handleTimeOver(),
    order: "DECREMENTAL"
  })

  const { choices, id, title } = quiz.questions[index]

  const handleTimeOver = useCallback(() => {
    setAnswers([...answers, answerSelected])
    setAnswerSelected({
      answerId: "",
      questionId: "",
      weight: 0
    })

    if (index < quiz.questions.length - 1)
      setIndex(index + 1)
    else
      setStep(4)
  }, [answers, answerSelected, index, setAnswers, setIndex, setStep, quiz])

  const saveAnswer = useCallback(() => {
    if (index < quiz.questions.length) {
      setAnswers([...answers, answerSelected])
      setAnswerSelected({
        answerId: "",
        questionId: "",
        weight: 0
      })

      if (index < quiz.questions.length - 1)
        setIndex(index + 1)
      else
        setStep(4)
    }
  }, [answers, answerSelected, index, quiz, setAnswers, setAnswerSelected, setIndex, setStep])

  // useEffect(() => {
  //   start(quiz.questions[index].duration)
  // }, [index, start, quiz])

  return (
    <QuizContainer>
      <Logo margin="0px 0px 50px 0px" size="50px"/>
      <Question>
        <Timer>
          <Text>{time}</Text>
        </Timer>
        {title}
      </Question>
      <ChoiceList
        answerSelected={answerSelected}
        choices={choices}
        handleClick={setAnswerSelected}
        questionId={id}
      />
      <Button handleClick={() => saveAnswer()} width="250px">Question suivante</Button>
      <Index>{index + 1} / {quiz.questions.length}</Index>
    </QuizContainer>
  )
}

export default Quiz