import React from "react";

import Flex from "../layouts/Flex";
import { ListContainer } from "../../styles/Home/ListSectionStyled";
import { Title } from "../../styles/Home/GlobalStyled";

const ThirdArticle = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
      width="100vw"
    >
        <Title>6 raisons de choisir Quiz</Title>
        <ListContainer>
          <div>
            <div>icone</div>
            <h3>INTERFACE RESPONSIVE</h3>
            <p>Ordinateur, tablette, smartphone adaptable à vos couleurs</p>
          </div>
          <div>
            <div>icone</div>
            <h3>SECURITE GARANTIE</h3>
            <p>Confidentialité de tests et sécurisation des données</p>
          </div>
          <div>
            <div>icone</div>
            <h3>QUESTIONNAIRES EN ACCES LIBRE</h3>
            <p>Des questions classées par thème à votre disposition</p>
          </div>
          <div>
            <div>icone</div>
            <h3>ECRITURE RAPIDE DE QUESTIONS</h3>
            <p>Saisie simple et intuitive puis validation par des experts</p>
          </div>
          <div>
            <div>icone</div>
            <h3>PLANIFICATIONS DE TESTS</h3>
            <p>Préparations des tests pour s'entraîner avant certification</p>
          </div>
          <div>
            <div>icone</div>
            <h3>PLANIFICATIONS DE TESTS</h3>
            <p>Préparations des tests pour s'entraîner avant certification</p>
          </div>
        </ListContainer>
    </Flex>
  );
};

export default ThirdArticle;
