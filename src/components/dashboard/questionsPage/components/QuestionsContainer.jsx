import React, { useState } from "react";

import CentralContainer from "../../layouts/CentralContainer";
import QuestionCard from "./QuestionCard";
import SearchTermsInput from "./SearchTermsInput";
import SelectTopics from "./SelectTopics";
import QuestionEditContainer from "../../questionEditPage/components/QuestionEditContainer"

import QuestionsTest from "../../../../assets/json/QuestionsTest.json";

import {
  SearchContainer,
  SearchContainer2,
} from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const CardContainer = () => {
  const [questions, setQuestions] = useState(QuestionsTest);
  const [searchTerms, setSearchTerms] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const editQuestion = (id) => {
    setIsEditing(!isEditing)
    setQuestions(questions.map(question => question.id === id ? 
      {...question, isEditing: !question.isEditing} : question
    ));
    console.log(id);
  };

  // console.log(isEditing);

  return (
    <CentralContainer
      flexDirection="column"
      background="#f8f8fa"
      width="100%"
      height="100%"
    >
      {isEditing ? (
        <p>HELLO</p>
        // <QuestionEditContainer  questions={questions}/>
      ) : (
        <>
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
            .map((question) => {
              return (
                <QuestionCard
                  key={question.id}
                  value={question}
                  questions={questions}
                  editQuestion={editQuestion}
                  deleteQuestion={deleteQuestion}
                />
              );
            })}
        </>
      )}
    </CentralContainer>
  );
};

export default CardContainer;
