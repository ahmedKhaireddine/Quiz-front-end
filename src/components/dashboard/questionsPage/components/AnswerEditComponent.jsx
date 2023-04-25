import React from "react";
import { Checkbox } from "@chakra-ui/react";

import TextareaField from "./TextareaField";
import { AnswerContainer } from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const AnswerEditComponent = ({ checkName, onCheckChange, onTextChange, textName }) => {
  return (
    <AnswerContainer>
    <TextareaField name={textName} onChange={onTextChange} />
      <Checkbox
        name={checkName}
        iconColor="#4fa9af"
        colorScheme="#4fa9a"
        margin="0 10px"
        onChange={onCheckChange}
      />
    </AnswerContainer>
  );
};

AnswerEditComponent.defaultProps = () => {};

export default AnswerEditComponent;
