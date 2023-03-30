import React, { useState } from "react";

import Header from "../layouts/Header";
import QuestionCard from "./components/QuestionCard";
import Aside from "../layouts/Aside"
import { MainContainer } from "../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { Flex } from "@chakra-ui/react";

const Questions = () => {
  const [answers, setAnswers] = useState([]);

  console.log("Questions edit answers", answers);
  return (
    <Flex>
      <MainContainer>
        <Header 
          title="Edition de Questions"
          description="Editez vos questions et leurs réponses"
        />
        <QuestionCard answers={answers} setAnswers={setAnswers} />
        <Aside answers={answers} setAnswers={setAnswers} />
      </MainContainer>
    </Flex>
  );
};

export default Questions;
