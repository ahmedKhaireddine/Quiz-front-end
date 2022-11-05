import { useContext } from "react"

import { Item, ListItems, TitleH4 } from "../../../styles/ReusableTagsStyled"
import { SIDE_BAR_LINKS } from "../../../constants"
import { UserContext } from "../../../contexts"


const LinksList = (props) => {
  const { user, setView } = useContext(UserContext)

  const listItemsJSX = SIDE_BAR_LINKS.map((element, index) => {
    if (user.role !== "admin" && element.whoCanAccess === "admin") {
      return null
    }

    return <Item
      alignItems= "center"
      display= "flex"
      key= {index}
      margin= "20px auto"
      onClick= {() => setView(element.viewToDisplay)}
      width= "75%"
    >
      {element.icon}
      <TitleH4
        color= "black"
        fontSize= ".7em"
        fontWeight= "600"
        padding= "0 0 0 20px"
      >
        {element.name}
      </TitleH4>
    </Item>
  })

  return (
    <ListItems margin= "50px 20px">
      {listItemsJSX}
    </ListItems>
  )
}

export default LinksList