import React from "react"

import Flex from "../layouts/Flex"
import { Icone, ListContainer } from "../../styles/home/ListSectionStyled"
import { Title } from "../../styles/home/GlobalStyled"
import Responsive from "../../assets/svg/responsive-illustration.svg"
import Security from "../../assets/svg/security-illustration.svg"
import Support from "../../assets/svg/support-illustration.svg"
import Librairy from "../../assets/svg/librairy-illustration.svg"
import Time from "../../assets/svg/time-illustration.svg"
import Fast from "../../assets/svg/fast-illustration.svg"

const ListSection = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
      width="100vw"
      id="description"
    >
        <Title>6 raisons de choisir Quiz</Title>
        <ListContainer>
          <div>
            <Icone><img src={Responsive} alt="responsive" /></Icone>
            <h3>INTERFACE RESPONSIVE</h3>
            <p>Ordinateur, tablette, smartphone adaptable à vos couleurs</p>
          </div>
          <div>
            <Icone><img src={Security} alt="securité" /></Icone>
            <h3>SECURITE GARANTIE</h3>
            <p>Confidentialité de tests et sécurisation des données</p>
          </div>
          <div>
            <Icone><img src={Librairy} alt="questionnaire" /></Icone>
            <h3>QUESTIONNAIRES EN ACCES LIBRE</h3>
            <p>Des questions classées par thème à votre disposition</p>
          </div>
          <div>
            <Icone><img src={Time} alt="temps" /></Icone>
            <h3>PLANIFICATIONS DE TESTS</h3>
            <p>Préparations des tests pour s'entraîner avant certification</p>
          </div>
          <div>
            <Icone><img src={Fast} alt="rapide" /></Icone>
            <h3>ECRITURE RAPIDE DE QUESTIONS</h3>
            <p>Saisie simple et intuitive puis validation par des experts</p>
          </div>
          <div>
            <Icone><img src={Support} alt="support" /></Icone>
            <h3>PLANIFICATIONS DE TESTS</h3>
            <p>Préparations des tests pour s'entraîner avant certification</p>
          </div>
        </ListContainer>
    </Flex>
  );
};

export default ListSection;
