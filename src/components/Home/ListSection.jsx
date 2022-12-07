import React from "react";

import Flex from "../layouts/Flex";
import { Icone, ListContainer } from "../../styles/Home/ListSectionStyled";
import { Title } from "../../styles/Home/GlobalStyled";
import { BsListCheck, BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { DiResponsive } from "react-icons/di"
import { AiOutlineFieldTime } from "react-icons/ai"
import { GiSandsOfTime } from "react-icons/gi"

const ListSection = () => {
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
            <Icone><DiResponsive size={50} color={"#1F939B"} /></Icone>
            <h3>INTERFACE RESPONSIVE</h3>
            <p>Ordinateur, tablette, smartphone adaptable à vos couleurs</p>
          </div>
          <div>
            <Icone><MdSecurity size={50} color={"#1F939B"} /></Icone>
            <h3>SECURITE GARANTIE</h3>
            <p>Confidentialité de tests et sécurisation des données</p>
          </div>
          <div>
            <Icone><BsReverseLayoutTextWindowReverse size={50} color={"#1F939B"} /></Icone>
            <h3>QUESTIONNAIRES EN ACCES LIBRE</h3>
            <p>Des questions classées par thème à votre disposition</p>
          </div>
          <div>
            <Icone><AiOutlineFieldTime size={50} color={"#1F939B"} /></Icone>
            <h3>ECRITURE RAPIDE DE QUESTIONS</h3>
            <p>Saisie simple et intuitive puis validation par des experts</p>
          </div>
          <div>
            <Icone><BsListCheck size={50} color={"#1F939B"} /></Icone>
            <h3>PLANIFICATIONS DE TESTS</h3>
            <p>Préparations des tests pour s'entraîner avant certification</p>
          </div>
          <div>
            <Icone><GiSandsOfTime size={50} color={"#1F939B"} /></Icone>
            <h3>PLANIFICATIONS DE TESTS</h3>
            <p>Préparations des tests pour s'entraîner avant certification</p>
          </div>
        </ListContainer>
    </Flex>
  );
};

export default ListSection;
