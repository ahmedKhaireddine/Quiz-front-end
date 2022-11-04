import { TbLogout } from "react-icons/tb"
import React from "react"

import { Box, TitleH4 } from "../../styles/ReusableTagsStyled"
import Flex from "../layouts/Flex"
import LinksList from "./core/LinksList"
import Logo from "../Logo"
import UserCard from "./core/UserCard"

const SideBar = (props) => {
  return (
    <Flex
      background= "#ffffff"
      flexDirection= "column"
      height= "100%"
      justifyContent= "space-between"
      width= "100%"
    >
      <Box>
        <Flex
          justifyContent="space-around"
          padding="25px 0 5px"
          width= "100%"
        >
          <Logo
            color="black"
            size="25px"
          />
        </Flex>
        <UserCard />
        <LinksList />
      </Box>
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
        >
          Se déconnecter
        </TitleH4>
      </Flex>
    </Flex>
  )
}

export default SideBar