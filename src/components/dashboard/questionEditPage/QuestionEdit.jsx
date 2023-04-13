import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";
import QuestionEditContainer from "./components/QuestionEditContainer";
import { Flex } from "@chakra-ui/react";

import QuestionsTest from "./tests/QuestionsTest.json";

import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";

const Questions = () => {
  const [questions, setQuestions] = useState(QuestionsTest);
  const [filtredTopics, setFiltredTopics] = useState([questions.topic]);
  const [filtredDurations, setFiltredDurations] = useState([]);

  console.log(
    "QuestionEdit: valeur de la 1ère réponse à la 1ère question =>",
    questions[0].choices[0],
    "topics =>", filtredTopics
  );

  // const filterValues = (value) => {
  //   // questions.filter(value => value !== value.id)
  //   setFiltredTopics({...questions.topics.filter((value, index) => value !== value[index - 1] )})
  // }
  // filterValues(questions.topic)

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
          />
          {/* {questions.map(question =>  */}
          <QuestionEditContainer questions={questions} setQuestions={setQuestions}/>
            {/* {question} */}
          {/* </QuestionEditCard> */}
          {/* )} */}

          <Aside subtitle="Liste des questions" padding="0" />
        </MainContainer>
      </Flex>
    </HelmetProvider>
  );
};

export default Questions;
