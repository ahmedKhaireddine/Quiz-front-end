import React from "react";
import { Checkbox } from "@chakra-ui/react";

import TextareaField from "./TextareaField";
import { AnswerContainer } from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const AnswerEditComponent = ({ checkName, onTextChange, textName }) => {
  return (
    <AnswerContainer>
    <TextareaField name={textName} onChange={onTextChange} />
      <Checkbox
        name={checkName}
        iconColor="#4fa9af"
        colorScheme="#4fa9a"
        margin="0 10px"
        onChange={(e) => console.log("checkbox => ", e.target.value)}
      />
    </AnswerContainer>
  );
};

AnswerEditComponent.defaultProps = () => {};

export default AnswerEditComponent;
