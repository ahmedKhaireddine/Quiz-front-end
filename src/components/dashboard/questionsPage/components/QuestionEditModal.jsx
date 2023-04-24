import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// --------- Components --------- //
import Button from "../../core/Button";
import DeleteButton from "../../core/DeleteButton";
import EditButton from "../../core/EditButton";
import NumberField from "./NumberField";
import TextareaField from "./TextareaField";

// --------- Styles --------- //
import {
  AnswerValueContainer,
  ButtonContainer,
  ItemsList,
  Line,
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const QuestionEditModal = ({
  isOpen,
  onClose,
  questions,
  setQuestions,
  value
}) => {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [answerValue, setAnswerValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");
  const [durationValue, setDurationValue] = useState("");

  const editAnswer = (id) => {
    setSelectAnswer(id);
  };

  const deleteAnswer = (id) => {
    setQuestionValue(value.choices.filter((answer) => answer.id !== id));
    console.log(id);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            // key={value.id}
            initialValues={{
              description: value.description,
              duration: value.duration,

              // Peut-être un problème avec le nommage (value de formik et value des datas)
              answer: value.answer
              // ne récupère pas la valeur de la réponse

              // Première méthode
              // answer: value.choices.map((answer, id) => answer[id]),
  
              // Seconde méthode
              // answer0: value.choices[0],
              // answer1: value.choices[1],
              // answer2: value.choices[2],
              // answer3: value.choices[3]
            }}
            onSubmit={(values, actions) => {
              setQuestions({ questions: values });
              actions.resetForm();
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object({
              description: Yup.string()
                .required("Ecrivez votre question")
                .max(255, "255 caractères maximum"),
              duration: Yup.number()
                .required("Précisez un temps limite pour répondre")
                .min(1, "Veuillez saisir un nombre entre 5 et 30")
                .max(30, "Veuillez saisir un nombre entre 5 et 30")
                .typeError("Veuillez saisir un nombre entre 5 et 30"),
              answer: Yup.string()
                .required("Ecrivez au moins une réponse")
                .max(255, "255 caractères maximum"),
            })}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <SubTitle fontSize="30px" fontWeight="bold" margin="0 0 15px 0" color="#1f939b">
                  Question
                </SubTitle>
                <TextareaField
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  paddingBottom="15px"
                />

                <TimeContainer>
                  <p>Temps pour répondre :</p>
                  <span>
                    <NumberField
                      value={formik.values.duration}
                      onChange={formik.handleChange}
                    />
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
                  {value.choices.map((answer, id) => (
                    <li key={id}>
                      {selectAnswer !== answer.id ? (
                        <ItemsList>
                          <AnswerValueContainer>{answer.value}</AnswerValueContainer>
                          <Line />
                          <ButtonContainer>
                            <EditButton onClick={() => editAnswer(answer.id)} />
                            <DeleteButton onClick={() => deleteAnswer(answer.id)} />
                          </ButtonContainer>
                        </ItemsList>
                      ) : (
                        <TextareaField
                          key={answer.id}
                          // name={answer[id]}
                          // name="answer"
                          name="answer0"
                          value={formik.values.answer}
                          onChange={formik.handleChange}
                        />
                      )}
                    </li>
                  ))}
                </ListContainer>
                <Button type="submit" margin="30px auto">
                  Enregistrer
                </Button>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default QuestionEditModal;
