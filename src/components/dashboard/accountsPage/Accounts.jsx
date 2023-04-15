import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { VscAdd } from "react-icons/vsc"
import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";

import { OptionsBar } from "../../../styles/dashboard/layouts/HeaderStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import { ButtonNew } from "../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const Accounts = (props) => {
  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Compte"
          subtitle="Retrouvez vos informations personnelles"
        />
        <Helmet>
          <title>Questionnaire</title>
        </Helmet>

        {/* <QuestionsContainer questions={questions} setQuestions={setQuestions} /> */}

        <Aside
          subtitle="Mon compte"
          padding="0"
        >
          {/* <p>{questions[].description}</p> */}
        </Aside>
      </MainContainer>
    </HelmetProvider>
  );
};

export default Accounts;
