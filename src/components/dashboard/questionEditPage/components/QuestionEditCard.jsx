import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MdModeEdit } from "react-icons/md";

import CentralContainer from "../../layouts/CentralContainer";
import Button from "../../core/Button";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";

import {
  ItemsList,
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";
import NumberField from "./NumberField";

import Question from "../../../../assets/json/questions.json";

const QuestionCard = ({ questionArray, setQuestionArray }) => {
  const [selectAnswer, setSelectAnswer] = useState(null);

  // console.log("questionArray dans la card à l'index 0 :", questionArray[0]);
  // console.log("choix l'index 0 :", questionArray[0].choices);
  // console.log("state de l'input des réponses", selectAnswer);

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
    // setAnswers({
    //   theme: values.theme,
    //   question: values.question,
    //   time: values.time,
    //   answer1: values.answer1,
    //   answer2: values.answer2,
    //   answer3: values.answer3,
    //   answer4: values.answer4,
    // });

    // console.log("time:", values.time);
    // console.log("QuestionCard answers :", answers);

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

  // const inputAppear = () => {
  // };
  
  const editAnswer = (id) => {
    setSelectAnswer(id)
    setQuestionArray(questionArray.filter(question => 
      question.choice.id === id
    ))
  };

  const onChoiceValueChange = e => {
    // setQuestionArray({
    //   ...questionArray.choices.value,
    //   value: e.target.value
    // })
    console.log(e.target.value);
  }

  return (
    <CentralContainer flexDirection="column" height="100%">
      {questionArray.map((question, index) => (
        <Formik
          initialValues={{
            theme: "Histoire",
            question: "Quand a eu lieu le Big Bang ?",
            time: "",
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
              <TextareaField name="question" value={question.description} />

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
              <ListContainer>
                {question.choices.map(choice => (
                  <li key={choice.id}>
                    {selectAnswer !== choice.id ? (
                    <ItemsList>
                      {choice.value}
                      <button>
                        <MdModeEdit 
                        fontSize="1.3em" 
                        color="#4fa9af" 
                        onClick={() => editAnswer(choice.id)}
                        />
                      </button>
                    </ItemsList>
                    ) : (
                      <TextareaField 
                      name={choice.id} 
                      value={choice.value} 
                      onChange={() => onChoiceValueChange}
                      />
                    )}
                  </li>
                ))}
              </ListContainer>
              {/* <TextareaField label="Réponse 1" name="answer1" />
            <TextareaField label="Réponse 2" name="answer2" />
            <TextareaField label="Réponse 3" name="answer3" />
            <TextareaField label="Réponse 4" name="answer4" /> */}

              <Button type="submit" onClick={onChoiceValueChange}>Enregistrer</Button>
            </form>
          )}
        </Formik>
      ))}
    </CentralContainer>
  );
};

export default QuestionCard;
