import React, { useState } from "react";

import Header from "../layouts/Header";
import QuestionEditCard from "./components/QuestionEditCard";
import Aside from "../layouts/Aside"
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
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
        <QuestionEditCard answers={answers} setAnswers={setAnswers} />
        <Aside answers={answers} setAnswers={setAnswers} />
      </MainContainer>
    </Flex>
  );
};

export default Questions;
