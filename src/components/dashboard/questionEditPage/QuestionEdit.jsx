import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";
import QuestionEditCard from "./components/QuestionEditCard";
import QuestionEditCard2 from "./components/QuestionEditCard2";
import QuestionList from "./components/QuestionList";

import Question from "../../../assets/json/questions.json";

import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import { Flex } from "@chakra-ui/react";

const Questions = () => {
  const [questionArray, setQuestionArray] = useState(Question);
  console.log("questionArray =>", questionArray);

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

          {/* <QuestionList questionArray={questionArray} setQuestionArray={setQuestionArray}/> */}

          <QuestionEditCard questionArray={questionArray} setQuestionArray={setQuestionArray} />
          {/* <QuestionEditCard2 questionArray={questionArray} setQuestionArray={setQuestionArray} /> */}

          <Aside
            subtitle="Liste des questions"
            padding="0"
          />
        </MainContainer>
      </Flex>
    </HelmetProvider>
  );
};

export default Questions;
