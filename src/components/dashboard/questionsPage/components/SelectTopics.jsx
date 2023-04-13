import React from "react";

import Select from "./Select";

const SelectTopics = ({ questions, setSelectedTopic }) => {
  const handleSelectTopic = (e) => {
    const value = e.target.value;
    setSelectedTopic(value);
  };

  return (
    // <Select 
    //   placeholder="Tous les thèmes" 
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
    <Select 
      placeholder="Tous les thèmes..." 
      onChange={handleSelectTopic} 
      // style={{ marginLeft: "20px"}}
    >
      {questions.map((question, index) => (
        <option key={index} value={question.topic}>
          {question.topic}
        </option>
      ))}
    </Select>
  );
};

export default SelectTopics;
