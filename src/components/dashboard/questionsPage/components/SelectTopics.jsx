import React from "react";

import Select from "./Select";

import { SelectContainer, SelectContainer2 } from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";

const SelectTopics = ({ questions, setSelectedTopic }) => {
  const handleSelectTopic = (e) => {
    const value = e.target.value;
    setSelectedTopic(value);
  };

  return (
    // <Select 
    //   placeholder="Thèmes" 
    //   onChange={handleSelectTopic}
    //   padding="20px 0"
    // >
    //   {questions.map((question, index) => (
    //     <option key={index} value={question.topic}>
    //       {question.topic}
    //     </option>
    //   ))}
    // </Select>

    // -------- 2e version -------- //
    <Select placeholder="Thèmes..." onChange={handleSelectTopic} marginLeft="20px" width="30%">
      {questions.map((question, index) => (
        <option key={index} value={question.topic}>
          {question.topic}
        </option>
      ))}
    </Select>
  );
};

export default SelectTopics;
