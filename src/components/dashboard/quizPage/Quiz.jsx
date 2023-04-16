import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import ButtonAdd from "../core/ButtonAdd";
import Header from "../layouts/Header";

import { OptionsBar } from "../../../styles/dashboard/layouts/HeaderStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";

const Questionnaires = (props) => {
  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Questionnaires"
          subtitle="Consultez la liste des questionnaires disponibles"
        >
          <OptionsBar display="flex">
            <ButtonAdd />
          </OptionsBar>
        </Header>
        <Helmet>
          <title>Questionnaires</title>
        </Helmet>

        {/* <QuestionsContainer questions={questions} setQuestions={setQuestions} /> */}

        <Aside
          subtitle="Questionnaire"
          padding="0"
        >
          {/* <p>{questions[].description}</p> */}
        </Aside>
      </MainContainer>
    </HelmetProvider>
  );
};

export default Questionnaires;
