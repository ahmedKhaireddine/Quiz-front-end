import React from "react";

import Select from "./Select";

import { SelectContainer } from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const SelectTopics = ({ margin, onChange, questions }) => {

  return (
    <SelectContainer margin={margin}>
      <Select placeholder="Tous les thèmes..." onChange={onChange}>
        {questions.map((question, index) => (
          <option key={index} value={question.topic}>
            {question.topic}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

SelectTopics.defaultProps = { onChange: () => {} };

export default SelectTopics;
