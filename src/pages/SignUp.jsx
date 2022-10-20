import React from "react"

import Flex from "../components/layouts/Flex"
import LeftSide from "../components/signin/LeftSide"
import RightSide from "../components/signup/RightSide"
import { UserContextProvider } from "../contexts/User"

const SignUp = () => {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  )
}

export default SignUp