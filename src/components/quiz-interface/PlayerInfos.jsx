import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { VStack, Heading } from "@chakra-ui/react"
import styled from "styled-components"
import { useContext } from "react"

import TextField from "../TextField"
import Button from "./core/Button"
import { QuizContext } from "../../contexts/Quiz"

const Box = styled.div`
    display: flex;
    flex-direction column;
`

const PlayerInfos = (props) => {
    const { setStep, setQuiz, setInfos } = useContext(QuizContext)
    
    return (
        <Formik
            initialValues={{
                lastName: "",
                firstName: ""
            }}
            validationSchema={Yup.object({
                lastName: Yup
                    .string()
                    .max(15, "*15 caractères maximum")
                    .required("*Veuillez renseigner un nom"),
                firstName: Yup
                    .string()
                    .max(15, "*15 caractères maximum")
                    .required("*Veuillez renseigner un prénom"),
            })}
            onSubmit={(values, actions) => {
                console.log("value onSubmit", values)
                setInfos(values)
                setStep(3)
                actions.resetForm()
            }}
        >
            {(formik) => ( 
                <Box>
                    <VStack
                        as="form"
                        w={{ base: "80%" }}
                        mx="auto"
                        spacing="30px"
                        onSubmit={formik.handleSubmit}
                        textAlign="center"
                    >
                        <Heading
                            as="h1" 
                            mb="30px"    
                        >
                            Dernière étape avant de commencer
                        </Heading>
                        <TextField
                            name="lastName"
                            placeholder="Nom..."
                        />
                        <TextField
                            name="firstName"
                            placeholder="Prénom..."
                            mb="30px"
                        />
                        <Button type="submit">Entrer</Button>
                    </VStack>
                </Box>   
            )}
        </Formik>
    )
}

export default PlayerInfos