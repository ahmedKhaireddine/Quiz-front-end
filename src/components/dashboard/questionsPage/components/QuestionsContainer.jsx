import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

import CentralContainer from "../../layouts/CentralContainer";
import QuestionCard from "./QuestionCard";
import QuestionEditModal from "./QuestionEditModal";
import SearchTermsInput from "./SearchTermsInput";
import SelectTopics from "./SelectTopics";

import { SearchContainer2 } from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const CardContainer = ({ questions, setQuestions }) => {
  const [searchTerms, setSearchTerms] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const editQuestion = (id) => {
    setSelectedQuestion(id);
    // A mieux comprendre ????
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question } : question
      )
    );
    onOpen();
  };

  return (
    <CentralContainer
      flexDirection="column"
      background="#f8f8fa"
      width="100%"
      height="100%"
    >
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
        .map((question, id) => (
          <>
            <QuestionCard
              key={question.id}
              value={question}
              editQuestion={editQuestion}
              deleteQuestion={deleteQuestion}
            />
            {selectedQuestion === id && (
              <QuestionEditModal
                isOpen={isOpen}
                onClose={onClose}
                value={question}
                setQuestions={setQuestions}
              />
            )}
          </>
        ))}
    </CentralContainer>
  );
};

export default CardContainer;
