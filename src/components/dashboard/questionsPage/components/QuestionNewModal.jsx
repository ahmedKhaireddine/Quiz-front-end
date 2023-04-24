import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// --------- Components --------- //
import Button from "../../core/Button";
import NumberField from "./NumberField";
import SelectTopics from "./SelectTopics";
import TextareaField from "./TextareaField";

// --------- Styles --------- //
import {
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const QuestionNewModal = ({
  isOpen,
  onClose,
  questions,
  setQuestions,
  setSelectedTopic,
}) => {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [answerValue, setAnswerValue] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newTopicSelected, setNewTopicSelected] = useState("");

  console.log("newQuestion =>", newQuestion);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalOverlay />
      <ModalContent maxW="500px">
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              topic: "",
              description: "",
              duration: "",
              answer0: "",
              answer1: "",
              answer2: "",
              answer3: "",
              answer4: "",
              answer5: "",
            }}
            onSubmit={(values, actions) => {
              setNewQuestion({
                newQuestion: {
                  description: values.description,
                  duration: values.duration,
                  id: values.id,
                  is_active: false,
                  topic: values.topic,
                  choices: [
                    {
                      id: 0,
                      value: values.answer0,
                      weight: 0,
                    },
                    {
                      id: 1,
                      value: values.answer1,
                      weight: 0,
                    },
                    {
                      id: 2,
                      value: values.answer2,
                      weight: 0,
                    },
                    {
                      id: 3,
                      value: values.answer3,
                      weight: 0,
                    },
                    {
                      id: 4,
                      value: values.answer4,
                      weight: 0,
                    },
                    {
                      id: 5,
                      value: values.answer5,
                      weight: 0,
                    },
                  ],
                },
              });
              console.log(newQuestion);
              // setQuestions({ ...questions, newQuestion });
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
                <SelectTopics
                  // name="topic"
                  questions={questions}
                  margin="0 0 25px 0"
                  onChange={formik.handleChange}
                  setNewTopicSelected={setNewTopicSelected}
                />
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
                  onChange={formik.handleChange}
                />

                <TimeContainer>
                  <p>Temps pour répondre :</p>
                  <span>
                    <NumberField
                      name="duration"
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
                  <Checkbox
                    iconColor="#4fa9af"
                    colorScheme="#4fa9a"
                    onChange={(e) =>
                      console.log("checkbox => ", e.target.value)
                    }
                  />
                  <TextareaField
                    name="answer0"
                    onChange={formik.handleChange}
                  />
                  <TextareaField
                    name="answer1"
                    onChange={formik.handleChange}
                  />
                  <TextareaField
                    name="answer2"
                    onChange={formik.handleChange}
                  />
                  <TextareaField
                    name="answer3"
                    onChange={formik.handleChange}
                  />
                  <TextareaField
                    name="answer4"
                    onChange={formik.handleChange}
                  />
                  <TextareaField
                    name="answer5"
                    onChange={formik.handleChange}
                  />
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

export default QuestionNewModal;
