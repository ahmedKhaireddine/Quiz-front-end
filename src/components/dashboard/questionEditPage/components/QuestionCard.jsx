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
  Box,
  Subtitle,
  TimeContainer,
  Title,
} from "../../../../styles/dashboard/questionEdit/QuestionEditStyled";

const QuestionCard = ({ answers, setAnswers }) => {
  // const [answers, setAnswers] = useState([]);

  const themes = [
    {
      id: 1,
      label: "Histoire",
    },
    {
      id: 2,
      label: "Sport",
    },
    {
      id: 3,
      label: "Géographie",
    },
    {
      id: 4,
      label: "Littérature",
    },
  ];

  const onSubmit = (values, actions) => {
    setAnswers({
      theme: values.theme,
      question: values.question,
      time: values.time,
      answer1: values.answer1,
      answer2: values.answer2,
      answer3: values.answer3,
      answer4: values.answer4,
    });
    console.log("QuestionCard answers :", answers);
    // navigate("/dashboard")
    actions.resetForm();
    // console.log(
    //   "theme",
    //   values.theme,
    //   "question",
    //   values.question,
    //   "time",
    //   values.time,
    //   "answer1",
    //   values.answer1
    // );
  };

  return (
    <Box>
      <Title txtCenter="center">Question</Title>
      <Formik
        initialValues={{
          theme: "Histoire",
          question: "Quand a eu lieu le Big Bang ?",
          time: 10,
          answer1: "Hier",
          answer2: "",
          answer3: "",
          answer4: ""
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
            <SelectField name="theme" placeholder="Choisissez votre thème" >
              {themes.map(theme => <option key={theme.id} value={theme.label}>{theme.label}</option>)}
            </SelectField>

            <TextareaField name="question" />

            <TimeContainer>
              <p>Temps pour répondre:&nbsp;</p>
              <NumberInput
                name="time"
                defaultValue={15}
                min={10}
                max={20}
                color="black"
              >
                <NumberInputField style={{ border: "2px solid #1f939b" }} />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    color="white"
                    backgroundColor="#1f939b"
                  />
                  <NumberDecrementStepper
                    color="white"
                    backgroundColor="#1f939b"
                  />
                </NumberInputStepper>
              </NumberInput>
              <span>sec</span>
            </TimeContainer>

            <Title txtCenter="center">Réponses</Title>
            <TextareaField label="Réponse 1" name="answer1" />
            <TextareaField label="Réponse 2" name="answer2" />
            <TextareaField label="Réponse 3" name="answer3" />
            <TextareaField label="Réponse 4" name="answer4" />

            <Button
              type="submit"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              margin="20px auto 30px"
              // onClick={handleSave()}
            >
              Enregistrer
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default QuestionCard;
