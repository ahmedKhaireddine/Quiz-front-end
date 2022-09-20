import { Item, ListItems, Polygon, Text } from "../../../styles/ChoiceListStyled"

const ChoiceList = ({
  answerSelected,
  choices,
  handleClick,
  questionId
}) => {
  const choicesItemsJsx = choices.map(({ id, value, weight }, index) => {
<<<<<<< HEAD
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
=======
    return <Item
      onClick={() => handleClick({
        answerId: id,
        questionId,
        weight
      })}
      key={index}
      selected={id == answerSelected.answerId}
    >
      <Polygon>
        <span>✨</span>
        <span>✨</span>
      </Polygon>
      <Text>{value}</Text>
    </Item>
>>>>>>> 4bbc320f553bb0233625f2a0c8337a5834f25394
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