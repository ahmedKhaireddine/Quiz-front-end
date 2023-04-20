import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// --------- Components --------- //
import { MdModeEdit } from "react-icons/md";
// import CentralContainer from "../../layouts/CentralContainer";
import Button from "../../core/Button";
import TextareaField from "../../questionEditPage/components/TextareaField";
import NumberField from "../../questionEditPage/components/NumberField";

// --------- Styles --------- //
import {
  ItemsList,
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const QuestionEditModal = ({
  value,
  isOpen,
  onClose,
  questions,
  setQuestions,
}) => {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [answerValue, setAnswerValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");
  const [durationValue, setDurationValue] = useState("");

  const editAnswer = (id) => {
    setSelectAnswer(id);
  };

  const handleQuestionValueChange = (e) => {
    setQuestionValue({ questionValue: e.target.value });
    console.log("questionValue =>", questionValue);
  };

  const handleDurationValueChange = (e) => {
    setDurationValue({ durationValue: e.target.value });
    console.log("durationValue =>", durationValue);
  };

  const handleAnswerValueChange = (e) => {
    setAnswerValue({ answerValue: e.target.value });
    console.log("answerValue =>", answerValue);
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
              description: "",
              duration: "",
              answer: "",
            }}
            onSubmit={(values, actions) => {
              // answerValue est modifié mais pas question
              setQuestions({questions: values});

              // renvoie une erreur "Cannot read properties of undefined (reading 'choices')"
              // answerValue est modifié mais pas question
              // setQuestions({...questions.description, questionValue})
              // setQuestions({
              //   answer: values.answer,
              // });
              actions.resetForm();
              alert(JSON.stringify(values, null, 2));
              console.log("questions =>", questions);
            }}
            validationSchema={Yup.object({
              description: Yup.string()
                .required("Aucune question décrite")
                .max(255, "255 caractères maximum"),
              duration: Yup.number()
                .min(5, "Veuillez saisir un nombre entre 5 et 30")
                .max(30, "Veuillez saisir un nombre entre 5 et 30")
                .typeError("Veuillez saisir un nombre entre 5 et 30"),
              // answer: Yup.string().max(255, "255 caractères maximum"),
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
                <TextareaField
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />

                <TimeContainer>
                  <p>Temps pour répondre :</p>
                  <span>
                    <NumberField
                      name="duration"
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
                          {answer.value}
                          <button>
                            <MdModeEdit
                              fontSize="1.3em"
                              color="#4fa9af"
                              onClick={() => editAnswer(answer.id)}
                            />
                          </button>
                        </ItemsList>
                      ) : (
                        <TextareaField
                          name="answer"
                          value={formik.values.answer}
                          onChange={formik.handleChange}
                        />
                      )}
                    </li>
                  ))}
                </ListContainer>

                <Button type="submit">Enregistrer</Button>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default QuestionEditModal;
