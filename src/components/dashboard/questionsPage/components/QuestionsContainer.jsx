import React, { useState } from "react";

import CentralContainer from "../../layouts/CentralContainer";
import QuestionCard from "./QuestionCard";
import SearchTermsInput from "./SearchTermsInput";
import SelectTopics from "./SelectTopics";
import QuestionEditContainer from "../../questionEditPage/components/QuestionEditContainer";

import QuestionsTest from "../../../../assets/json/QuestionsTest.json";

import {
  SearchContainer,
  SearchContainer2,
} from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";
import QuestionEditModal from "./QuestionEditModal";
import { useDisclosure } from "@chakra-ui/react";

const CardContainer = ({ questions, setQuestions }) => {
  const [searchTerms, setSearchTerms] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const editQuestion = (id) => {
    // setIsEditing(!isEditing);
    // setSelectedQuestion(id);
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, isEditing: !question.isEditing }
          : question
      )
    );
    onOpen();
    console.log("id =>", id);
    console.log("onOpen =>", onOpen);
  };

  // console.log(isEditing);

  // return (
  //   <CentralContainer
  //     flexDirection="column"
  //     background="#f8f8fa"
  //     width="100%"
  //     height="100%"
  //   >
  //     {/* <SearchContainer>
  //           <SearchTermsInput
  //             questions={questions}
  //             setSearchTerms={setSearchTerms}
  //           />
  //           <SelectTopics
  //             questions={questions}
  //             setSelectedTopic={setSelectedTopic}
  //           />
  //         </SearchContainer> */}
  //     <SearchContainer2>
  //       <SearchTermsInput
  //         questions={questions}
  //         setSearchTerms={setSearchTerms}
  //       />
  //       <SelectTopics
  //         questions={questions}
  //         setSelectedTopic={setSelectedTopic}
  //       />
  //     </SearchContainer2>
  //     {questions
  //       .filter((value) => {
  //         return (
  //           value.description.toLowerCase().includes(searchTerms) &&
  //           value.topic.includes(selectedTopic)
  //         );
  //       })
  //       .map((question, id) =>
  //         questions.id === id ? (
  //           <QuestionEditModal
  //             isOpen={isOpen}
  //             onOpen={onOpen}
  //             onClose={onClose}
  //             key={question.id}
  //             questions={questions}
  //             setQuestions={setQuestions}
  //           />
  //         ) : (
  //           <QuestionCard
  //             key={question.id}
  //             value={question}
  //             questions={questions}
  //             editQuestion={editQuestion}
  //             deleteQuestion={deleteQuestion}
  //           />
  //         )
  //       )}
  //   </CentralContainer>
  // );
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
        .map((question, id) => (
          <QuestionCard
            key={question.id}
            value={question}
            questions={questions}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
            isOpen={isOpen}
          />
        )
      )}
      {isOpen && 
        <QuestionEditModal isOpen={isOpen} onClose={onClose}/>
      }
    </CentralContainer>
  );
};

export default CardContainer;
