import React, {useState} from "react";

import { Checkbox } from "@chakra-ui/react";
import Flex from "../../../layouts/Flex";

import { Box, Text, TitleH4 } from "../../../../styles/ReusableTagsStyled";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { DeleteButton, EditButton } from "../../../../styles/dashboard/core/ButtonStyled";

const Card = ({
  value, 
  deleteQuestion,
  editQuestion,
}) => {

  return (
    <Flex
      width="90%"
      alignItems="center"
      background="white"
      borderRadius="3px"
      boxShadow="rgb(0, 0, 0, 30%) 0px 2px 8px 0px"
      height="70px"
      justifyContent="space-between"
      margin="5px auto"
      padding="10px 20px"
    >
      <Flex justifyContent="center" width="10%">
        <Checkbox
          iconColor="#4fa9af"
          colorScheme="#4fa9a"
          onChange={(e) => console.log("checkbox => ", e.target.value)}
        />
      </Flex>
      <Box width="40%">
        <TitleH4 color="black" fontSize=".7em" fontWeight="600">
          Description
        </TitleH4>
        <Text
          color="black"
          fontSize=".6em"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          margin="4px 0"
        >
          {value.description}
        </Text>
      </Box>
      <Box textAlign="center" width="20%">
        <TitleH4 color="black" fontSize=".7em" fontWeight="600">
          Thème
        </TitleH4>
        <Text color="black" fontSize=".6em" margin="4px 0">
          {value.topic}
        </Text>
      </Box>
      <Box textAlign="center" width="20%">
        <TitleH4 color="black" fontSize=".7em" fontWeight="600">
          Active
        </TitleH4>
        <Text color="black" fontSize=".6em" margin="4px 0">
          {value.is_active ? "Oui" : "Non"}
        </Text>
      </Box>
      <Flex justifyContent="space-between" width="10%">
        <EditButton onClick={(e) => editQuestion(value.id)}>
          <MdModeEdit fontSize="1.3em" color="#4fa9af"/>
        </EditButton>
        <DeleteButton onClick={(e) => deleteQuestion(value.id)}>
          <RiDeleteBin6Line fontSize="1.3em" color="#4fa9af"/>
        </DeleteButton>
      </Flex>
    </Flex>
  );
};

export default Card;
