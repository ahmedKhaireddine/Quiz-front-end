import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";
import QuestionsContainer from "./components/QuestionsContainer";
// import ItemPreviewCard from "./components/ItemPreviewCard";
import Select from "./components/Select";

import QuestionsTest from "../../../assets/json/QuestionsTest.json"

import { OptionsBar } from "../../../styles/dashboard/layouts/HeaderStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import { MdBorderBottom } from "react-icons/md";

const Questions = () => {
  const [questions, setQuestions] = useState(QuestionsTest);

  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Questions"
          subtitle="Consultez la liste des questions disponibles"
        >
          {/* <OptionsBar display="flex">
            <Select
              name="theme"
              placeholder="Thèmes"
              style={{ 
                borderRight: "none",
                borderRadius: "0",
                borderBottom: "none"
              }}
            >
              {questions.map((question, index) => (
                <option key={index} value={question.topic}>
                  {question.topic}
                </option>
              ))}
            </Select>
            <Select
              name="theme"
              placeholder="Temps de réponse"
              style={{
                borderRadius: "0 6px 0 0",
                borderBottom: "none"
              }}
            >
              {questions.map((question, index) => (
                <option key={index} value={question.duration}>
                  {question.duration}
                </option>
              ))}
            </Select>
          </OptionsBar> */}
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
