import { useContext } from "react"

import { QuizContext } from "../../contexts/Quiz"

const Stepper = () => {

  const { step } = useContext(QuizContext)

  switch (step) {
    case 1:
      return "home component"
    case 2:
      return "Player infos component"
    case 3:
      return "Quiz component"
    case 4:
      return "End component"

    default:
      return <h1 style={{ color: "white" }}>Unknown step</h1>;
  }
}

export default Stepper