import React from "react"
import * as Yup from "yup"
import { Formik } from "formik"

import Flex from "../layouts/Flex"
import { InputContainer, InputName, InputMail } from "../../styles/Home/ContactStyled"
import TextFieldContact from "./TextFieldContact"
import TextareaFieldContact from "./TextareaFieldContact"
import { Button, ContactContainer } from "../../styles/Home/ContactStyled"

const ContactForm = () => {
    
    const initialValues={
        email: "",
        sujet: "",
        message: ""
    }

    const validationSchema = Yup.object({
        name: Yup
        .string()
        .required("*Nom requis"),
        email: Yup
        .string()
        .email("Format d'email valide")
        .required("*Un email est requis afin de pouvoir vous répondre"),
        message: Yup
        .string()
        .required("*Précisez la raison de votre message")
    })

    const onSubmit = (values, actions) => {
        // actions.resetForm()
        console.log("values =>", values)
    }
    
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
            background="#F5F5F6"
        >  
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit()}
                >
                {(formik) => (
                    <ContactContainer>
                        <h2>Contactez-nous</h2>
                        <p>Laissez-nous un message, nous vous répondrons rapidement</p>

                        <InputContainer>
                            <InputName>
                                <TextFieldContact
                                    name="name"
                                    placeholder="*Nom..."
                                    background="white"
                                />
                            </InputName>
                            <InputMail>
                                <TextFieldContact
                                    name="email"
                                    placeholder="*Email.."
                                    background="white"
                                />
                            </InputMail>
                        </InputContainer>

                        <TextareaFieldContact
                            name="message"
                            placeholder="*Votre message..."
                            height="150px"
                            background="white"
                        />

                        <Button type="submit" margin="30px auto">Envoyer</Button>

                    </ContactContainer>
                )}
            </Formik>
        </Flex>
  )
}

export default ContactForm