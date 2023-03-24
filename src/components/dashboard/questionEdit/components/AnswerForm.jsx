// import { useState } from "react";

import TextareaField from "./TextareaField";
import Button from "../../../quiz-interface/core/Button";
import { AnswerContainer } from "../../../../styles/dashboard/questionEdit/QuestionEditStyled";

const AnswerForm = ({ answer, setAnswer, answersArray, setAnswersArray }) => {
  // const [answer, setAnswer] = useState('');
  // const [answersArray, setAnswersArray] = useState([]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSave = (e) => {
    setAnswersArray([
      ...answersArray,
      {
        id: "",
        content: answer,
      },
    ]);
    console.log("answer :", answer);
    console.log("clicl");
  };
  //   console.log("answersArray :", answersArray);

  return (
    <AnswerContainer>
      <TextareaField
        label="Réponse 1"
        name="answer"
        width="400px"
        onChange={(e) => handleChange(e)}
        value={answer}
      />
      <TextareaField
        label="Réponse 2"
        name="answer"
        width="400px"
        onChange={(e) => handleChange(e)}
        value={answer}
      />
      <TextareaField
        label="Réponse 3"
        name="answer"
        width="400px"
        onChange={(e) => handleChange(e)}
        value={answer}
      />
      <TextareaField
        label="Réponse 4"
        name="answer"
        width="400px"
        onChange={(e) => handleChange(e)}
        value={answer}
      />
      <Button
        type="submit"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        margin="20px auto 30px"
        // onClick={handleSave()}
      >
        Enregistrer
      </Button>
    </AnswerContainer>
  );
};

export default AnswerForm;
