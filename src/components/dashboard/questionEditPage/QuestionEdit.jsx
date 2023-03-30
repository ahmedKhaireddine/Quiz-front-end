import React, { useState } from "react";

import Header from "../layouts/Header";
import QuestionCard from "./components/QuestionCard";
import Aside from "../layouts/Aside"
import { MainContainer } from "../../../styles/dashboard/questionEdit/QuestionEditStyled";
import { Flex } from "@chakra-ui/react";

const Questions = () => {
  const [answers, setAnswers] = useState([]);

  console.log("Questions edit answers", answers);
  return (
    <Flex>
      <MainContainer>
        <Header />
        <QuestionCard answers={answers} setAnswers={setAnswers} />
        <Aside answers={answers} setAnswers={setAnswers} />
      </MainContainer>
    </Flex>
  );
};

export default Questions;
