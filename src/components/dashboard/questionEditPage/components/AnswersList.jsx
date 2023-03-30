import React from "react";

import { List } from "../../../../styles/dashboard/questionEdit/QuestionEditStyled";

const AnswersList = ({ answersArray, setAnswersArray }) => {
  return (
    <ul>
      {/* {answersArray.map((id, content) => {
        return <List><span>Réponse {answersArray.id}: </span>{answersArray.content}</List>
      })} */}
      {/* <List><span>Réponse 1: </span>{answersArray[index].content}</List>
      <List><span>Réponse 2: </span>Le jour où mon patron a refusé de m'augmenter</List>
      <List><span>Réponse 3: </span>Il y a 10 milliards d'années</List>
      <List><span>Réponse 4: </span>Il y a 10 milliards d'années</List> */}
    </ul>
  );
};

export default AnswersList;
