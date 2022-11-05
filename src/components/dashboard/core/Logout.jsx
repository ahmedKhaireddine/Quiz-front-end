import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { TbLogout } from "react-icons/tb"

import Flex from "../../layouts/Flex"
import { TitleH4 } from "../../../styles/ReusableTagsStyled"

const Logout = (props) => {
  const navigate = useNavigate()

  const logout = useCallback((name) => {
    localStorage.removeItem(name)
    navigate("/")
  }, [navigate])

  return (
    <Flex
        alignItems= "center"
        margin= "30px auto"
        width= "63%"
      >
        <TbLogout
          color="rgba(31,147,155,.8)"
          fontSize="1.3em"
        />
        <TitleH4
          color= "black"
          fontSize= ".7em"
          fontWeight= "600"
          padding= "0 0 0 17px"
          onClick={() => logout("user")}
        >
          Se déconnecter
        </TitleH4>
      </Flex>
  )
}

export default Logout