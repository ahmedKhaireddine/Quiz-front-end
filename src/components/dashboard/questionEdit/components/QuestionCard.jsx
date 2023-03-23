import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import Button from "../../../quiz-interface/core/Button";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import {
  Container,
  Subtitle,
  TimeContainer,
  Title,
} from "../../../../styles/dashboard/questionEdit/QuestionEditStyled";
import AnswerForm from "./AnswerForm";
import AnswersList from "./AnswersList";

const QuestionCard = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const onSubmit = (values, actions) => {
    // navigate("/dashboard")
    // actions.resetForm()
  };

  const addAnswer = (id, content) => {
    const newAnswer = {
        id: 0,
        content: content
    }
    setAnswers({answers: [...answers, newAnswer]})
    console.log("tableau de réponses:", answers);
  };

  console.log(answers);


  return (
    <Container>
      <Title txtCenter="center">Question</Title>
      <Formik
        initialValues={{
          question: "Quand a eu lieu le Big Bang ?",
          time: "",
          answer: "",
          answerValue: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          question: Yup.string()
            .required("Aucune question décrite")
            .max(255, "255 caractères maximum"),
          time: Yup.number(),
          answer: Yup.string().max(255, "255 caractères maximum"),
        })}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Subtitle>Thèmes</Subtitle>
            <SelectField name="select" placeholder="Choisissez votre thème" />
            <TextareaField name="question" />

            <TimeContainer>
              <p>Temps pour répondre:&nbsp;</p>
              <NumberInput defaultValue={15} min={10} max={20} color="black">
                <NumberInputField style={{border: "2px solid #1f939b"}}/>
                <NumberInputStepper>
                  <NumberIncrementStepper color="white" backgroundColor="#1f939b"/>
                  <NumberDecrementStepper color="white" backgroundColor="#1f939b"/>
                </NumberInputStepper>
              </NumberInput>
              <span>sec</span>
            </TimeContainer>

            <Title txtCenter="center">Réponses</Title>

            <AnswersList answers/>

            <AnswerForm addAnswer={addAnswer}/>
            <AnswerForm addAnswer={addAnswer}/>
            <AnswerForm addAnswer={addAnswer}/>
            <AnswerForm addAnswer={addAnswer}/>
            <AnswerForm addAnswer={addAnswer}/>
            <AnswerForm addAnswer={addAnswer}/>



            <Button
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              margin="20px 0 30px"
              width="220px"
            >
              Ajouter une réponse
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default QuestionCard;
