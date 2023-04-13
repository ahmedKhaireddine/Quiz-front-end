import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";
import QuestionEditCard from "./components/QuestionEditCard";
import Select from "./tests/Select";
import { Flex } from "@chakra-ui/react";

import QuestionsTest from "./tests/QuestionsTest.json";

import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import { OptionsBar } from "../../../styles/dashboard/layouts/HeaderStyled";

const Questions = () => {
  const [questions, setQuestions] = useState(QuestionsTest);
  console.log(
    "QuestionEdit: valeur de la 1ère réponse à la 1ère question =>",
    questions[0].choices[0]
  );

  return (
    <HelmetProvider>
      <Flex>
        <Helmet>
          <title>Edition de Questions</title>
        </Helmet>
        <MainContainer>
          <Header
            title="Edition de Questions"
            subtitle="Editez vos questions et leurs réponses"
          >
            <OptionsBar display="visible">
              <Select name="theme" placeholder="Choisissez votre thème">
                {questions.map((question, id) => (
                  <option key={question.id} value={question.topic}>
                    {question.topic}
                  </option>
                ))}
              </Select>
            </OptionsBar>
          </Header>

          {/* {questions.map(question =>  */}
          <QuestionEditCard questions={questions} setQuestions={setQuestions}>
            {/* {question} */}
          </QuestionEditCard>
          {/* )} */}

          <Aside subtitle="Liste des questions" padding="0" />
        </MainContainer>
      </Flex>
    </HelmetProvider>
  );
};

export default Questions;
