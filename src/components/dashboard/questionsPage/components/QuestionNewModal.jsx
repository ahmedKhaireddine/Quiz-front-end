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
import TextareaField from "./TextareaField";
import NumberField from "./NumberField";

// --------- Styles --------- //
import {
  ItemsList,
  ListContainer,
  TimeContainer,
} from "../../../../styles/dashboard/questionEditPage/QuestionEditStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const QuestionEditModal = ({ isOpen, onClose, setQuestions }) => {
    const [selectAnswer, setSelectAnswer] = useState(null);
    const [answerValue, setAnswerValue] = useState("");

    const newQuestion = {
        description: "",
        duration: "",
        id: "",
        is_active: "",
        topic: "",
        choices: [
            {
                id: "",
                value: "",
                weight: ""
            }
        ]
    }

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
                <TextareaField name="question" value={newQuestion.description} />

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
                  {newQuestion.choices.map((choice, id) => (
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
                          defaultValue={choice.newQuestion}
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
