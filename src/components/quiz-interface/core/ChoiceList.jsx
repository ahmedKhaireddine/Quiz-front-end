import { useState } from "react"

import { Item, ListItems, Polygon, Text } from "../../../styles/ChoiceListStyled"

const ChoiceList = ({
  answerSelected,
  choices,
  handleClick,
  questionId
}) => {
  const choicesItemsJsx = choices.map(({ id, value, weight }, index) => {
    return (
      <Item
        onClick={() => handleClick({
          answerId: id,
          questionId,
          weight
        })}
        key={index}
        selected={id == answerSelected.answerId}
      >
        <Polygon>✨✨</Polygon>
        <Text>{value}</Text>
      </Item>
    )
  })

  return <ListItems>{choicesItemsJsx}</ListItems>
}

ChoiceList.defaultProps = {
  answerSelected: {},
  choices: [],
  handleClick: () => {},
  questionId: "Pas d'id"
}

export default ChoiceList