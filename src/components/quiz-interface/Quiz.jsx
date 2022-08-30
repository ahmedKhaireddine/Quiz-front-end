
import { useContext, useEffect, useState } from "react"

import Button from "./core/Button"
import ChoiceList from "./core/ChoiceList"
import Logo from "../Logo"
import Questions from "../../questions.json"
import { QuizContext } from "../../contexts/Quiz"
import { QuizContainer, Timer, Question, Index } from "../../styles/QuizStyled"
import { useTimer } from "../../hooks/useTimer"


const Quiz = (props) => {
  const { answers } = useContext(QuizContext)
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
  const [choice, setChoice] = useState()
  const { answer } = useContext(QuizContext)

  const nextQuestion = () => {

  }

  useEffect(() => {
    start(Questions[index].duration)
  }, [index, start])

  return (
    <QuizContainer>
      <Logo margin="0px 0px 50px 0px" size="50px" color="#45DDE7"/>
      <Question>
        <Timer>
          <p>{time}</p>
        </Timer>
        {title}
      </Question>
      <ChoiceList choices={choices}/>
      <Button
        handleClick={() => setIndex(index + 1)}
      >
        Question suivante
      </Button>
      <Index>{index + 1} / {Questions.length}</Index>
    </QuizContainer>
  )
}

export default Quiz