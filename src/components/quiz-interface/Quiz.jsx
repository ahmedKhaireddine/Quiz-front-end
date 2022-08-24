import { useState } from "react"

import Questions from "../../questions.json"
import ChoiceList from "./core/ChoiceList"

const Quiz = () => {
  const [index, setIndex] = useState(0)
  const { choices, title } = Questions[index]

  return (
    <div>
      <h2>{index + 1}. {title}</h2>
      <ChoiceList choices={choices}/>
      <button onClick={() => setIndex(index + 1)}>Question suivant</button>
    </div>
  )
}

export default Quiz