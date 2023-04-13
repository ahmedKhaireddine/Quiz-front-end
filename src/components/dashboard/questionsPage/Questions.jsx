import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";
import QuestionsContainer from "./components/QuestionsContainer";
// import ItemPreviewCard from "./components/ItemPreviewCard";
import Select from "./components/Select";

import QuestionsTest from "./tests/QuestionsTest.json"

import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";

const Questions = () => {
  const [questions, setQuestions] = useState(QuestionsTest);

  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Questions"
          subtitle="Consultez la liste de vos questions"
        >
        </Header>
        <Helmet>
          <title>Questions</title>
        </Helmet>

        <QuestionsContainer questions={questions} setQuestions={setQuestions} />

        <Aside
          questions={questions}
          setQuestions={setQuestions}
          subtitle="Question"
          padding="0"
        >
          {/* <p>{questions[].description}</p> */}
        </Aside>
      </MainContainer>
    </HelmetProvider>
  );
};

export default Questions;
