import { useEffect, useState } from "react"

import Questions from "../../questions.json"
import ChoiceList from "./core/ChoiceList"
import { useTimer } from "../../hooks/useTimer"

const Quiz = () => {
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

  useEffect(() => {
    start(Questions[index].duration)
  }, [index, start])

  return (
    <div>
      <h1>Timer {time}</h1>
      <h2>{index + 1}. {title}</h2>
      <ChoiceList choices={choices}/>
      <button onClick={() => setIndex(index + 1)}>Question suivant</button>
    </div>
  )
}

export default Quiz