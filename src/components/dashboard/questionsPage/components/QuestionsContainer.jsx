import React, { useState } from "react";

import { Checkbox } from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Flex from "../../../layouts/Flex";
import SearchTermsInput from "./SearchTermsInput";
import Select from "../components/Select";

import QuestionsTest from "../tests/QuestionsTest.json"

import {
  Button,
  SearchContainer,
  SelectContainer,
} from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";
import { Box, Text, TitleH4 } from "../../../../styles/ReusableTagsStyled";
import CentralContainer from "../../layouts/CentralContainer";

const CardContainer = () => {
  // const [activeEdit, setActiveEdit] = useState(false);
  // const [index, setIndex] = useState(null);
  const [questions, setQuestions] = useState(QuestionsTest);
  const [searchTerms, setSearchTerms] = useState("");

  //   console.log("questions :", questions[8].id);

  //   const toggleActiveEdit = () => {
  //     setActiveEdit(!activeEdit);
  //     console.log("Ola");
  //   };

  const deleteCard = ({ id }) => {
    setQuestions(questions.filter((el) => el.id !== id));
    // console.log(id);
  };

  return (
    <CentralContainer
      flexDirection="column"
      background="#f8f8fa"
      width="100%"
      height="100%"
    >
      <SearchContainer>
        <SearchTermsInput
          questions={questions}
          setSearchTerms={setSearchTerms}
        />
        <SelectContainer>
          <Select placeholder="Thèmes">
            {questions.map((question, index) => (
              <option key={index} value={question.topic}>
                {question.topic}
              </option>
            ))}
          </Select>
        </SelectContainer>
      </SearchContainer>
      {questions
        .filter((value) => {
          return value.description.toLowerCase().includes(searchTerms);
        })
        .map((value) => {
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
              key={value.id}
              // onMouseOver={}
            >
              <Flex justifyContent="center" width="10%">
                <Checkbox
                  iconColor="#4fa9af"
                  colorScheme="#4fa9a"
                  onChange={(e) => console.log("checkbox => ", e.target.value)}
                  value={value.id}
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
                  {value.active ? "Oui" : "Non"}
                </Text>
              </Box>
              <Flex justifyContent="space-between" width="10%">
                <Button
                //   onClick={toggleActiveEdit}
                >
                  <MdModeEdit fontSize="1.3em" color="#4fa9af" />
                </Button>
                <Button>
                  <RiDeleteBin6Line
                    fontSize="1.3em"
                    color="#4fa9af"
                    onClick={deleteCard}
                  />
                </Button>
              </Flex>
            </Flex>
          );
        })}
    </CentralContainer>
  );
};

export default CardContainer;
