import React, { useState } from "react";

import CentralContainer from "../../layouts/CentralContainer";

import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const QuestionCard = ({ questionArray }) => {
    const [topics, setTopics] = useState([])
    console.log("topics : ", questionArray.topic);

    // const listTopics = (index) => {
    //     setTopics({
    //         questionArray.map(question => question.topic !== question[index].topic)
    //     })
    // }
    // listTopics()

  return (
    <CentralContainer flexDirection="column" height="100%">
      <SubTitle
        fontSize="30px"
        fontWeight="bold"
        color="#1f939b"
        margin="0 0 15px 0"
      >
        Filtrer par thèmes
      </SubTitle>

      <select placeholder="Choisissez votre thème">
        {questionArray.map((question) => (
          <option>{question.topic}</option>
        ))}
      </select>
    </CentralContainer>
  );
};

export default QuestionCard;
