import { useContext } from "react"

import { Item, ListItems, TitleH4 } from "../../../styles/ReusableTagsStyled"
import { SIDE_BAR_LINKS } from "../../../constants"
import { UserContext } from "../../../contexts"


const LinksList = (props) => {
  const { user } = useContext(UserContext)

  const listItemsJSX = SIDE_BAR_LINKS.map((element) => {
    if (user.role !== "admin" && element.whoCanAccess === "admin") {
      return null
    }

    return <Item
      alignItems= "center"
      display= "flex"
      margin= "20px auto"
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

  return <ListItems margin= "50px 20px">
    {listItemsJSX}
  </ListItems>
}

export default LinksList