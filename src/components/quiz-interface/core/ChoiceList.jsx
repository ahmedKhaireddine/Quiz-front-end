import React from "react"

import { ListItems, Item } from "../../../styles/ChoiceListStyled"

const ChoiceList = (props) => {

  const { choices } = props

  const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
    return <Item
      key={index}
      onClick={() => {}}
    >{value}</Item>
  })

  return <ListItems>{choicesItemsJsx}</ListItems>
}

ChoiceList.defaultProps = {
  choises: []
}

export default ChoiceList