import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { VscAdd } from "react-icons/vsc"
import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";

import { OptionsBar } from "../../../styles/dashboard/layouts/HeaderStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import { ButtonNew } from "../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const Questionnaires = (props) => {
  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Questionnaires"
          subtitle="Consultez la liste des questionnaires disponibles"
        >
          <OptionsBar display="flex">
            <ButtonNew>
              <span>
                Ajouter &nbsp;
              </span>
                {/* <CgAddR /> */}
                {/* <BiAddToQueue /> */}
                <VscAdd />
                {/* <RiAddFill /> */}
                {/* <RiAddCircleLine /> */}
              </ButtonNew>
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
