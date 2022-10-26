import { useContext } from "react"

import Home from "../Home"
import Over from "../Over"
import PlayerInfos from "../PlayerInfos"
import Quiz from "../Quiz"
import { QuizContext } from "../../../contexts/Quiz"

const Stepper = () => {
  const { step } = useContext(QuizContext)

  switch (step) {
    case 1:
      return <Home />
    case 2:
      return <PlayerInfos />
    case 3:
      return <Quiz />
    case 4:
      return <Over />
    default:
      return <Home />
  }
}

export default Stepper