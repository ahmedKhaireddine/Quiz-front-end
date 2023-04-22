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
import { MdModeEdit } from "react-icons/md";
// import CentralContainer from "../../layouts/CentralContainer";
import Button from "../../core/Button";
import EditButton from "../../core/EditButton"
import DeleteButton from "../../core/DeleteButton"
import NumberField from "../../questionEditPage/components/NumberField";
import TextareaField from "../../questionEditPage/components/TextareaField";

// --------- Styles --------- //
import {
  ItemsList,
  Line,
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
              // ne récupère pas la valeur de la réponse
              answer: value.choices.answer,
            }}
            onSubmit={(values, actions) => {
              setQuestions({questions: values});
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
                          <Line />
                            <EditButton
                              fontSize="1.3em"
                              color="#4fa9af"
                              onClick={() => editAnswer(answer.id)}
                            />
                            <DeleteButton
                            
                            />
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
                <Button type="submit" margin="30px auto">Enregistrer</Button>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default QuestionEditModal;
