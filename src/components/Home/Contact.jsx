// import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik"
// import styled from "styled-components"

// import { Alert, AlertIcon } from '@chakra-ui/react'
import Flex from "../layouts/Flex"
import TextFieldContact from "./TextFieldContact"
import SelectFieldContact from "./SelectFieldContact"
import TextareaFieldContact from "./TextareaFieldContact"
import { ContactSchema } from "../../validations/contact"
import {
  InputContainer,
  InputName,
  InputMail,
} from "../../styles/Home/ContactStyled"
import { Title } from "../../styles/Home/GlobalStyled"
import { Button, ContactContainer, SelectContainer } from "../../styles/Home/ContactStyled"

// const AlertContainer = styled.div`
//     height: 100px;
//     width: 200px;
//     position: absolute;
//     top: 45%;
//     right: 0;
// `

const ContactForm = () => {
  // const [visible, setVisible] = useState(false)

  const onSubmit = (values, actions) => {
    console.log("values =>", values);
    // setVisible(true)
    alert("Votre message a bien été envoyé !")
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
          name: "",
          email: "",
          sujet: "",
          message: ""
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

            {/* {visible & 
              <AlertContainer>
                <Alert status='success' color="black">
                  <AlertIcon />
                  Message envoyé !
                </Alert>
              </AlertContainer>
            } */}
          </ContactContainer>
        )}
      </Formik>
    </Flex>
  );
};

export default ContactForm;
