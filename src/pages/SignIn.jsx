import React from "react"

import Flex from "../components/layouts/Flex"
import LeftSide from "../components/signin/LeftSide"
import RightSide from "../components/signin/RightSide"

const SignIn = () => {
  return (
    <Flex
      alignItems= "center"
      background="white"
      color="black"
      height= "100vh"
      justifyContent= "space-between"
      width= "100vw"
    >
      <LeftSide/>
      <RightSide/>
    </Flex>
  )
}

export default SignIn