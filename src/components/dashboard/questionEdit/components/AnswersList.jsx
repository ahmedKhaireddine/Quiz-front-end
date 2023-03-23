import React from "react";

import { List } from "../../../../styles/dashboard/questionEdit/QuestionEditStyled";

const AnswersList = (answers) => {
  return (
    <ul>
      {/* {answers.map((id, content) => {
        return <li key={id}>{content}</li>;
      })} */}
      <List><span>Réponse 1: </span>Il y a 4 milliards d'années</List>
      <List><span>Réponse 2: </span>Le jour où mon patron a refusé de m'augmenter</List>
      <List><span>Réponse 3: </span>Il y a 10 milliards d'années</List>
      <List><span>Réponse 4: </span>Il y a 10 milliards d'années</List>
    </ul>
  );
};

export default AnswersList;
