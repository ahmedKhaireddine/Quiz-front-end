import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import ButtonAdd from "../core/ButtonAdd";
import Header from "../layouts/Header";
import QuestionsContainer from "./components/QuestionsContainer";
// import ItemPreviewCard from "./components/ItemPreviewCard";
import Select from "./components/Select";
import QuestionEditContainer from "../questionEditPage/components/QuestionEditContainer";

import QuestionsTest from "../../../assets/json/QuestionsTest.json";

import { OptionsBar } from "../../../styles/dashboard/layouts/HeaderStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";


const Questions = () => {
  const [questions, setQuestions] = useState(QuestionsTest)

  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Questions"
          subtitle="Consultez la liste des questions disponibles"
        >
          <OptionsBar display="flex">
            {/* <Select
              name="theme"
              placeholder="Thèmes"
              style={{ 
                borderRadius: "0",
                borderLeft: "none",
                borderBottom: "none",
                boxShadow: "none",
                borderTopRightRadius: "4px",
              }}
            >
              {questions.map((question, index) => (
                <option key={index} value={question.topic}>
                  {question.topic}
                </option>
              ))}
            </Select> */}

            {/* Version pour le bouton */}
            <ButtonAdd />
          </OptionsBar>
        </Header>
        <Helmet>
          <title>Questions</title>
        </Helmet>
          <QuestionsContainer questions={questions}  setQuestions={setQuestions}/>
        <Aside
          subtitle="Question"
          padding="0"
        >
        </Aside>
      </MainContainer>
    </HelmetProvider>
  );
};

export default Questions;
