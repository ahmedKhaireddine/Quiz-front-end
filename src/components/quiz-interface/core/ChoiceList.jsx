import React from "react"

const ChoiceList = (props) => {

  const { choices } = props

  const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
    return <li
      key={index}
      onClick={() => {}}
    >{value}</li>
  })

  return <ul>{choicesItemsJsx}</ul>
}

ChoiceList.defaultProps = {
  choises: []
}

export default ChoiceList