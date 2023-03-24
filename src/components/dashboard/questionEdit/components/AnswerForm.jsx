import { useState } from "react";

import TextareaField from "./TextareaField";
import { AnswerContainer } from "../../../../styles/dashboard/questionEdit/QuestionEditStyled";

const AnswerForm = () => {

  const handleChange = (e) => {
    const value = e.target.value
  };

  return (
    <AnswerContainer>
      <TextareaField
      name="toto"
        width="100%"
        onChange={(e) => handleChange(e)}
        value=''
      />
    </AnswerContainer>
  );
};

export default AnswerForm;
