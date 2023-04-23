import React from "react";

import { VscAdd } from "react-icons/vsc";

import {
  BtnAdd,
  Icon,
  Text,
} from "../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const ButtonAdd = ({ children, onClick }) => {
  return (
    <BtnAdd onClick={onClick}>
      <Icon>
        <VscAdd />
      </Icon>
      <Text>Ajouter</Text>
      {children}
    </BtnAdd>
  );
};

ButtonAdd.defaultProps = { onClick: () => {} };

export default ButtonAdd;
