import React from "react"

import { Item, ListItems, Polygon, Text } from "../../../styles/ChoiceListStyled"

const ChoiceList = (props) => {
  const { choices } = props

  const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
    return <Item
      key={index}
      onClick={() => {}}
    >
      <Polygon>✨✨</Polygon>
      <Text>{value}</Text>
    </Item>
  })

  return <ListItems>{choicesItemsJsx}</ListItems>
}

ChoiceList.defaultProps = {
  choises: []
}

export default ChoiceList