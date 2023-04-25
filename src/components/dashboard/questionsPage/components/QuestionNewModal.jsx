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
import AnswerEditComponent from "./AnswerEditComponent";

// --------- Styles --------- //
import {
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const QuestionNewModal = ({
  isOpen,
  onClose,
  questions,
  setQuestions,
  setSelectedTopic,
}) => {
  const choices = [
    {
      id: 0,
      value: "",
      weight: 0,
    },
    {
      id: 1,
      value: "",
      weight: 0,
    },
    {
      id: 2,
      value: "",
      weight: 0,
    },
    {
      id: 3,
      value: "",
      weight: 0,
    },
    {
      id: 4,
      value: "",
      weight: 0,
    },
    {
      id: 5,
      value: "",
      weight: 0,
    },
  ];

  const [newQuestion, setNewQuestion] = useState("");
  const [newTopicSelected, setNewTopicSelected] = useState("");
  const [checked, setChecked] = useState(0);
  const [checkedAnswer, setCheckedAnswer] = useState(0);

  console.log("newQuestion =>", newQuestion);

  const isChecked = (id) => {
    setChecked(choices.filter((choice, id) => (choice.id === id ? 0 : 1)));
  };

  const handleChecked = (id) => {
    setCheckedAnswer(id);
    // setChecked(choices.filter((choice, id) => choice.id === id ? 0 : 1))

    console.log(`l'id ${id} est à ${checked}`);
  };

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
              choice: ""
            }}
            onSubmit={(values, actions) => {
              setNewQuestion({
                newQuestion: {
                  description: values.description,
                  duration: values.duration,
                  id: "",
                  is_active: false,
                  topic: values.topic,
                  choices: [
                    {
                      id: 0,
                      value: values.choice,
                      weight: checked,
                    },
                    {
                      id: 1,
                      value: values.choice,
                      weight: checked,
                    },
                    {
                      id: 2,
                      value: values.choice,
                      weight: checked,
                    },
                    {
                      id: 3,
                      value: values.choice,
                      weight: checked,
                    },
                    {
                      id: 4,
                      value: values.choice,
                      weight: checked,
                    },
                    {
                      id: 5,
                      value: values.choice,
                      weight: checked,
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
                  paddingBottom="15px"
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
                <p>
                  Cochez la bonne réponse
                  <i>(une seule bonne réponse possible)</i>
                </p>
                <ListContainer>
                  {choices.map((choice, id) => (
                    <AnswerEditComponent
                      key={id}
                      textName={choice} // 0,1,2,3,4,5
                      onTextChange={formik.handleChange}
                      onCheckChange={() => handleChecked(choice.id)}
                      checked={() => isChecked(choice.id)}
                      checkName={choice.id}
                    />
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

export default QuestionNewModal;
