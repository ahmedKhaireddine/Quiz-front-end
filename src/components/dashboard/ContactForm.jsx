import React from "react"
import * as Yup from "yup"
import { Box, Heading, VStack } from "@chakra-ui/react"
import { Formik } from "formik"

import Button from "../../components/quiz-interface/core/Button"
import Flex from "../layouts/Flex"
import Textarea from "../../components/TextArea"
import TextField from "../../components/TextField"

const ContactForm = () => {
    
    const initialValues={
        email: "",
        sujet: "",
        message: ""
    }

    const validationSchema = Yup.object({
        email: Yup
        .string()
        .email("Format d'email valide")
        .required("*Email requis"),
        sujet: Yup
        .string()
        .required("*Indiquez un sujet"),
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
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit()}
                >
                {(formik) => (
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        width="40vw"
                    >
                    <VStack
                        as="form"
                        mx="auto"
                        onSubmit={formik.handleSubmit}
                        spacing="25px"
                        textAlign="center"
                        w={{ base: "80%" }}
                    >
                        <Heading
                            as="h1"
                            mb="10px"
                            color="black"
                        >
                            Contactez-nous
                        </Heading>

                        <TextField
                            label="Email"
                            name="email"
                        />

                        <TextField
                            label="Sujet"
                            name="sujet"
                        />

                        <Textarea
                            label="Message"
                            name="message"
                            type="text-area"
                            marginBottom="40px" 
                        />

                        <Button type="submit">Envoyer</Button>
                        </VStack>
                    </Box>
                )}
            </Formik>
        </Flex>
  )
}

export default ContactForm