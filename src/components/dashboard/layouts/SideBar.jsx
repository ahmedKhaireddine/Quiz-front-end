import React from "react";

import { Box } from "../../../styles/ReusableTagsStyled";
import Flex from "../../layouts/Flex";
import LinksList from "../core/LinksList";
import Logo from "../../Logo";
import Logout from "../core/Logout";
import UserCard from "../core/UserCard";

const SideBar = (props) => {
  return (
    <Flex
      background="#ffffff"
      flexDirection="column"
      height="100vh"
      justifyContent="space-between"
      width="100%"
    >
      <Box>
        <Flex justifyContent="space-around" padding="25px 0 5px" width="100%">
          <Logo color="black" size="25px" />
        </Flex>
        <UserCard />
        <LinksList />
      </Box>
      <Logout />
    </Flex>
  );
};

export default SideBar;
