import React from "react"

import { Box } from "../../styles/ReusableTagsStyled"
import Login from "../../assets/svg/login-illustration.svg"

const LeftSide = (props) => {
  return (
    <Box
      height="100vh"
      url={Login}
      width="60vw"
    ></Box>
  )
}

export default LeftSide