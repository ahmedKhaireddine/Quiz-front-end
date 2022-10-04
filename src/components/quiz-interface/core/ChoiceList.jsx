import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

import { Item, ListItems, Text, Polygon } from "../../../styles/ChoiceListStyled"

const ChoiceList = ({
  answerSelected,
  choices,
  handleClick,
  questionId
}) => {
  const bgItems = useColorModeValue("#f1f1f1", "#171923")
  const boxShadow = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")
  const bgItemSelected = useColorModeValue("#1f939b", "#45DDE7")
  const bgPolygon = useColorModeValue("#1f939b", "#45DDE7")
  const color = useColorModeValue("rgba(0, 0, 0, 0.8)", "#F1F1F1")

  const choicesItemsJsx = choices.map(({ id, value, weight }, index) => {
    return (
      <Item
        onClick={() => handleClick({
          answerId: id,
          questionId,
          weight
        })}
        bgItems={bgItems}
        bgItemSelected={bgItemSelected}
        boxShadow={boxShadow}
        color={color}
        key={index}
        selected={id === answerSelected.answerId}
      >
        <Polygon
          bgPolygon={bgPolygon}
        />
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
  questionId: ""
}

export default ChoiceList