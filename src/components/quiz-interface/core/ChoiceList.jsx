import React from "react"
// import Answer from "./Answer"
import { useState } from "react"

const ChoiceList = (props) => {

  const { choices } = props

  const [active, setActive] = useState([])

  const toggleActive = () => {
    setActive(!active)
    console.log(active)
  }
  console.log(active)

  const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
    return <li
      className={`${active ? "answer-anime" : ""}`}
      id={id}
      key={index}
      onClick={toggleActive}
    >{value}</li>
  })

  return <ul>{choicesItemsJsx}</ul>
}

ChoiceList.defaultProps = {
  choises: []
}

export default ChoiceList