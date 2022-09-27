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
    width: 150%;
`

const PlayerInfos = (props) => {
    const { setStep, setInfos } = useContext(QuizContext)

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
                        w={{ base: "100%" }}
                        mx="auto"
                        spacing="30px"
                        onSubmit={formik.handleSubmit}
                        textAlign="center"
                    >
                        <Heading
                            as="h1"
                            mb="30px"
                        >
                            Tu y es presque...
                        </Heading>
                        <TextField
                            name="lastName"
                            placeholder="Nom..."
                            bgColor="rgba(26, 32, 44, 1)"
                            boxShadow="md"
                        />
                        <TextField
                            name="firstName"
                            placeholder="Prénom..."
                            mb="30px"
                            bgColor="rgba(26, 32, 44, 1)"
                            boxShadow="md"
                        />
                        <Button type="submit">Entrer</Button>
                    </VStack>
                </Box>
            )}
        </Formik>
    )
}

export default PlayerInfos