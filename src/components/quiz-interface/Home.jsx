import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { VStack } from "@chakra-ui/react"
import styled from "styled-components"
import { useContext } from "react"

import TextField from "../TextField"
import LogoAnimated from "../LogoAnimated"
import Button from "./core/Button"
import { QuizContext } from "../../contexts/Quiz"
import questions from "../../questions.json"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Home = () => {
    const { setStep, setQuiz } = useContext(QuizContext)

    return (
        <Formik
            initialValues={{code: ""}}
            validationSchema={Yup.object({
                code: Yup
                    .string()
                    .required("Vous devez entrer un code")
                    .max(15, "Le code ne peut contenir plus de 15 caractères")
            })}
            onSubmit={(values, actions) => {
                setQuiz({
                    questions
                })
                actions.resetForm()
                setStep(2)
            }}
        >
            {(formik) => ( 
                <Box width={[1, 1 / 2, 1 / 4]} >
                    <VStack
                        as="form"
                        w={{ base: "80%", md: 400 }}
                        mx="auto"
                        spacing="50px"
                        justifyContent="center"
                        onSubmit={formik.handleSubmit}
                    >
                        <LogoAnimated word="Quiz &nbsp; !!!"/>
                        <TextField
                            name="code"
                            placeholder="Entrer votre code..."
                        />
                        <Button type="submit">Entrer</Button>
                    </VStack>
                </Box>   
            )}
        </Formik>
    )
}

export default Home