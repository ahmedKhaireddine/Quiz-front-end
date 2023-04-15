import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// --------- Components --------- //
import { MdModeEdit } from "react-icons/md";
import CentralContainer from "../../layouts/CentralContainer";
import Button from "../../core/Button";
import TextareaField from "./TextareaField";

// --------- Styles --------- //
import {
  ItemsList,
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";
import NumberField from "./NumberField";

const QuestionCard = ({ questions, setQuestions }) => {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [answerValue, setAnswerValue] = useState("");

  const onSubmit = (values, actions) => {
    // answerValue est modifié mais pas question
    // setQuestion({
    //   ...question.choices.value,
    //    answerValue
    //   });

    // renvoie une erreur "Cannot read properties of undefined (reading 'choices')"
    // answerValue est modifié mais pas question
    setQuestions({
      answer: values.answer,
    });
    actions.resetForm();
  };

  const editAnswer = (id) => {
    setSelectAnswer(id);
  };

  const onChoiceValueChange = (e) => {
    setAnswerValue({ answerValue: e.target.value });
  };

  return (
    <CentralContainer flexDirection="column" height="100%">
      {questions.map((value, index) => (
        <>
          <Formik
            key={index}
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
                  Question
                </SubTitle>
                <TextareaField name="question" value={value.description} />

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
                  {value.choices.map((choice, id) => (
                    <li key={id}>
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
                          name="answer"
                          defaultValue={choice.value}
                          onChange={onChoiceValueChange}
                        />
                      )}
                    </li>
                  ))}
                </ListContainer>

                <Button type="submit">Enregistrer</Button>
              </form>
            )}
          </Formik>
        </>
      ))}
    </CentralContainer>
  );
};

export default QuestionCard;
