import { useContext } from "react"

import Home from "../Home"
import Over from "../Over"
import PlayerInfos from "../PlayerInfos"
import QuizComponent from "../QuizComponent"
import { QuizContext } from "../../../contexts/Quiz"

const Stepper = () => {

  const { step } = useContext(QuizContext)
  console.log("étape", step)
  switch (step) {
    case 1:
      return <Home />
    case 2:
      return <PlayerInfos />
    case 3:
      return <QuizComponent />
    case 4:
      return <Over />

    default:
      return <h1 style={{ color: "black" }}>Unknown step</h1>;
  }
}

export default Stepper