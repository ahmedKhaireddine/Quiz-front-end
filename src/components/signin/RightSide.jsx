import React from "react"

import { Box, SubTitle, Title } from "../../styles/ReusableTagsStyled"
import Flex from "../layouts/Flex"
import SignInFormik from "./SignInFormik"

const RightSide = (props) => {
  return (
    <Flex
      alignItems= "center"
      color="black"
      flexDirection="column"
      justifyContent="center"
      height= "100vh"
      width= "40vw"
    >
      <Box width="100%">
        <Title
          color= "rgba(31, 147, 155, 1)"
          fontSize="2.5em"
          fontWeight="bold"
          margin="10px auto 0px"
          padding="10px"
          textAlign="center"
        >
          Bienvenue
        </Title>
        <SubTitle
          color= "grey"
          fontSize=".9em"
          margin="0px auto 60px"
          textAlign="center"
        >
          Entrez vos identifiants pour continuer
        </SubTitle>
        <SignInFormik/>
      </Box>
    </Flex>
  )
}

export default RightSide