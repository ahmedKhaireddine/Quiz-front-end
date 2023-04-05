import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";

import QuestionEditCard from "./components/QuestionEditCard";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import { Flex } from "@chakra-ui/react";

const Questions = () => {
  const [answers, setAnswers] = useState([]);

  console.log("Questions edit answers", answers);
  return (
    <HelmetProvider>
      <Flex>
        <Helmet>
          <title>Edition de Questions</title>
        </Helmet>
        <MainContainer>
          <Header
            title="Edition de Questions"
            description="Editez vos questions et leurs réponses"
          />
          <QuestionEditCard answers={answers} setAnswers={setAnswers} />
          <Aside
            answers={answers}
            setAnswers={setAnswers}
            subtitle="Liste des questions"
            padding="0"
          />
        </MainContainer>
      </Flex>
    </HelmetProvider>
  );
};

export default Questions;
