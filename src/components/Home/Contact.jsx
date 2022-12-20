import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik"
import { useColorModeValue } from "@chakra-ui/react"

import { Alert, AlertIcon } from '@chakra-ui/react'
import Flex from "../layouts/Flex"
import TextFieldContact from "./TextFieldContact"
import SelectFieldContact from "./SelectFieldContact"
import TextareaFieldContact from "./TextareaFieldContact"
import { ContactSchema } from "../../validations/contact"
import {
  InputContainer,
  InputName,
  InputMail,
} from "../../styles/home/ContactStyled"
import { Title } from "../../styles/home/GlobalStyled"
import { AlertContainer, Button, ContactContainer, SelectContainer } from "../../styles/home/ContactStyled"

const ContactForm = () => {
  const [visible, setVisible] = useState(false)
  console.log("visible succes :", visible)

  const bg = useColorModeValue("#1f939b", "#45DDE7")

  const onSubmit = (values, actions) => {
    console.log("values =>", values)
    setVisible(true)
    actions.resetForm()
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100vw"
      background="#F5F5F6"
      position="relative"
      padding="0 0 30px 0"
    >
      <Formik
        initialValues={{
          name: "rené",
          email: "a@a.a",
          sujet: "option1",
          message: "Hello"
        }}
        validationSchema={ContactSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <ContactContainer>
            <Title>Contactez-nous</Title>
            <p>Laissez-nous un message, nous vous répondrons rapidement</p>

            <form onSubmit={formik.handleSubmit}>
              <InputContainer>
                <InputName>
                  <TextFieldContact
                    name="name"
                    placeholder="Nom..."
                    background="white"
                  />
                </InputName>
                <InputMail>
                  <TextFieldContact
                    name="email"
                    placeholder="* Email.."
                    background="white"
                  />
                </InputMail>
              </InputContainer>

              <SelectContainer>
                  <SelectFieldContact
                      name="sujet"
                      placeholder="* Sujet"
                      fontSize=".8em"
                      background="white"
                      boxShadow="0px 5px 5px rgba(0, 0, 0, 0.25)"
                      color="#777"
                  >
                      <option value='option1'>Problème technique</option>
                      <option value='option2'>Renseignements</option>
                      <option value='option3'>Autre</option>
                  </SelectFieldContact>
              </SelectContainer>

              <TextareaFieldContact
                name="message"
                placeholder="* Votre message..."
                height="150px"
                background="white"
              />

              <Button type="submit" margin="30px auto">
                Envoyer
              </Button>
            </form>

            {visible && 
              <AlertContainer>
                <Alert status='success' color="white" bg="#64c7ce">
                  <AlertIcon color="white"/>
                  Message envoyé !
                </Alert>
              </AlertContainer>
            }
          </ContactContainer>
        )}
      </Formik>
    </Flex>
  );
};

export default ContactForm;
