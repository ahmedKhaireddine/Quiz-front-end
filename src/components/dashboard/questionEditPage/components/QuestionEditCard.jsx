import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import CentralContainer from "../../layouts/CentralContainer";
import Button from "../../core/Button";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";

import { TimeContainer } from "../../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";
import NumberField from "./NumberField";

import Question from "../../../../assets/json/questions.json"

const QuestionCard = ({ answers, setAnswers }) => {
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

    console.log("time:", values.time);
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
    <CentralContainer flexDirection="column" height="100%">
      <Formik
        initialValues={{
          theme: "Histoire",
          question: "Quand a eu lieu le Big Bang ?",
          time: 18,
          answer1: "Hier",
          answer2: "En l'an 0",
          answer3: "Quand j'ai fait brûler le repas la semaine dernière",
          answer4: "Il y a environ 13,8 milliards d'années",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          question: Yup.string()
            .required("Aucune question décrite")
            .max(255, "255 caractères maximum"),
          time: Yup.number()
            .min(5, "Veuillez saisir un nombre entre 5 et 30")
            .max(30, "Veuillez saisir un nombre entre 5 et 30")
            .typeError("Veuillez saisir un nombre entre 5 et 30"),
          answer: Yup.string().max(255, "255 caractères maximum"),
        })}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <SubTitle
              fontSize="30px"
              fontWeight="bold"
              color="#1f939b"
              margin="0 0 15px 0"
            >
              Thèmes
            </SubTitle>
            <SelectField name="theme" placeholder="Choisissez votre thème">
              {themes.map((theme) => (
                <option key={theme.id} value={theme.label}>
                  {theme.label}
                </option>
              ))}
            </SelectField>

            <SubTitle
              fontSize="30px"
              fontWeight="bold"
              color="#1f939b"
              margin="0 0 15px 0"
            >
              Question
            </SubTitle>
            <TextareaField name="question" />

            <TimeContainer>
              <p>Temps pour répondre :</p>
              <span>
                <NumberField name="time" />
              </span>
              <span>sec</span>
            </TimeContainer>

            <SubTitle
              txtCenter="center"
              fontSize="30px"
              fontWeight="bold"
              color="#1f939b"
              margin="0 0 15px 0"
            >
              Réponses
            </SubTitle>
            <ul>
              {Question.map(item => {
                return <li>{item.description}</li>
              }
              )}
            </ul>
            {/* <TextareaField label="Réponse 1" name="answer1" />
            <TextareaField label="Réponse 2" name="answer2" />
            <TextareaField label="Réponse 3" name="answer3" />
            <TextareaField label="Réponse 4" name="answer4" /> */}
            

            <Button type="submit">Enregistrer123</Button>
          </form>
        )}
      </Formik>
    </CentralContainer>
  );
};

export default QuestionCard;
