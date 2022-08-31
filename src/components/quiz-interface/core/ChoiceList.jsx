import { useState } from "react"

const ChoiceList = (props) => {

  const { choices, answerSelected, setAnswerSelected, questionId } = props

  const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
    return <li
      id={id}
      key={index}
      onClick={() => setAnswerSelected({id, weight, questionId})}
    >{value}</li>
  })

  return <ul>{choicesItemsJsx}</ul>
}

ChoiceList.defaultProps = {
  choises: []
}

export default ChoiceList