import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDisclosure } from "@chakra-ui/react";

// --------- Components --------- //
import Aside from "../layouts/aside/Aside";
import ButtonAdd from "../core/ButtonAdd";
import Header from "../layouts/Header";
// import ItemPreviewCard from "./components/ItemPreviewCard";
import QuestionsContainer from "./components/QuestionsContainer";
import QuestionNewModal from "./components/QuestionNewModal";

import QuestionsTest from "../../../assets/json/QuestionsTest.json";

// --------- Styles --------- //
import { OptionsBar } from "../../../styles/dashboard/layouts/HeaderStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";

const Questions = () => {
  const [questions, setQuestions] = useState(QuestionsTest);
  const [selectedTopic, setSelectedTopic] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log("questions[0].choices[0] dans la page Question =>", questions[0].choices[0]);

  console.log("questions dans QuestionsPage =>", questions);

  const openAddQuestionModal = () => {
    onOpen();
  };

  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          fontSizeTitle="28px"
          fontSizeSubtitle="24px"
          title="Questions"
          subtitle="Consultez la liste des questions disponibles"
        >
          <OptionsBar display="flex">
            <ButtonAdd onClick={openAddQuestionModal} />
          </OptionsBar>
        </Header>

        <Helmet>
          <title>Questions</title>
        </Helmet>

        <QuestionsContainer
          questions={questions}
          setQuestions={setQuestions}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <QuestionNewModal
          isOpen={isOpen}
          onClose={onClose}
          questions={questions}
          setQuestions={setQuestions}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <Aside subtitle="Question" padding="0"></Aside>
      </MainContainer>
    </HelmetProvider>
  );
};

export default Questions;
