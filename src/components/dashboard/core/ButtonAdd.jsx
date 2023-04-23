import React from "react";

import { VscAdd } from "react-icons/vsc";

import {
  BtnAdd,
  Icon,
  Text,
} from "../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const ButtonAdd = () => {
  return (
    <BtnAdd>
      <Icon>
        <VscAdd />
      </Icon>
      <Text>Ajouter</Text>
    </BtnAdd>
  );
};

export default ButtonAdd;
