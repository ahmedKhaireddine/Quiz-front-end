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
import Button from "../../core/Button";
import TextareaField from "../../questionEditPage/components/TextareaField";
import NumberField from "./NumberField";

// --------- Styles --------- //
import {
  ItemsList,
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const QuestionEditModal = ({ isOpen, onClose, questions, setQuestions }) => {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [answerValue, setAnswerValue] = useState("");
  const [newQuestion, setNewQuestion] = useState("")

  const question = {
    description: "",
    duration: "",
    id: "",
    is_active: "",
    topic: "",
    choices: [
      {
        id: "",
        value: "",
        weight: "",
      },
    ],
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalOverlay />
      <ModalContent
        // maxH="400px"
        maxW="500px"
      >
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              description: "",
              duration: "",
              // ne récupère pas la valeur de la réponse
              answer: "",
            }}
            onSubmit={(values, actions) => {
              setNewQuestion({ newQuestion: values})
              setQuestions({ ...questions, newQuestion });
              actions.resetForm();
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object({
              description: Yup.string()
                .required("Aucune question décrite")
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
                  Question
                </SubTitle>
                <TextareaField
                  name="question"
                  onChange={formik.handleChange}
                />

                <TimeContainer>
                  <p>Temps pour répondre :</p>
                  <span>
                    <NumberField name="time" onChange={formik.handleChange}/>
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
                  <TextareaField name="answer1" onChange={formik.handleChange}/>
                  <TextareaField name="answer2" onChange={formik.handleChange}/>
                  <TextareaField name="answer3" onChange={formik.handleChange}/>
                  <TextareaField name="answer4" onChange={formik.handleChange}/>
                  <TextareaField name="answer5" onChange={formik.handleChange}/>
                  <TextareaField name="answer6" onChange={formik.handleChange}/>
                </ListContainer>

                <Button type="submit">Enregistrer</Button>
              </form>
            )}
          </Formik>
        </ModalBody>

        <ModalFooter>
          {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuestionEditModal;
