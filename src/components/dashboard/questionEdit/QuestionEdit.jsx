import React from "react"

import Header from "../Header"
import QuestionCard from "./components/QuestionCard"
import Aside from "./components/Aside"
import { MainContainer } from "../../../styles/dashboard/questionEdit/QuestionEditStyled"
import { Flex } from "@chakra-ui/react"

const Questions = (props) => {
  return (
    <Flex>
      <MainContainer>
        <Header />
        <QuestionCard />
      </MainContainer>

      <Aside />
    </Flex>
  )
}

export default Questions