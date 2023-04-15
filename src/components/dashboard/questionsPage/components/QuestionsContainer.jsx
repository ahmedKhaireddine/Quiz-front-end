import React, { useState } from "react";

import CentralContainer from "../../layouts/CentralContainer";
import QuestionCard from "./QuestionCard";
import SearchTermsInput from "./SearchTermsInput";
import SelectTopics from "./SelectTopics";

import QuestionsTest from "../../../../assets/json/QuestionsTest.json";

import { SearchContainer, SearchContainer2 } from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const CardContainer = () => {
  const [questions, setQuestions] = useState(QuestionsTest);
  const [searchTerms, setSearchTerms] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const deleteCard = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
    console.log("id de deleteCard function =>", id);
    console.log("deleteCard");
  };

  const editCard = (id) => {
    setQuestions(questions.filter((question) => question.id === id));
    console.log("id d'editCard function =>", id);
    console.log("editCard");
  };

  return (
    <CentralContainer
      flexDirection="column"
      background="#f8f8fa"
      width="100%"
      height="100%"
    >
      {/* <SearchContainer>
        <SearchTermsInput
          questions={questions}
          setSearchTerms={setSearchTerms}
        />
        <SelectTopics
          questions={questions}
          setSelectedTopic={setSelectedTopic}
        />
      </SearchContainer> */}
      <SearchContainer2>
        <SearchTermsInput
          questions={questions}
          setSearchTerms={setSearchTerms}
        />
        <SelectTopics
          questions={questions}
          setSelectedTopic={setSelectedTopic}
        />
      </SearchContainer2>
      {questions
        .filter((value) => {
          return (
            value.description.toLowerCase().includes(searchTerms) &&
            value.topic.includes(selectedTopic)
          );
        })
        .map((value) => {
          return <QuestionCard value={value} deleteCard={deleteCard} />;
        })}
    </CentralContainer>
  );
};

export default CardContainer;
