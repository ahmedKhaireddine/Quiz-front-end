import { useContext } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { Box, useColorModeValue, VStack } from "@chakra-ui/react"

import Button from "./core/Button"
import LogoAnimated from "../LogoAnimated"
import questions from "../../questions.json"
import { QuizContext } from "../../contexts/Quiz"
import TextField from "../TextField"
import { Footer, Link, Text, SmallText } from "../../styles/HomeStyled"


const Home = () => {
    const { setStep, setQuiz } = useContext(QuizContext)

    const color = useColorModeValue("#1F939B", "#45DDE7")

    return (
        <>
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
                        _id: "_id",
                        questions
                    })
                    actions.resetForm()
                    setStep(2)
                }}
            >
                {(formik) => (
                    <Box
                        width="45vw"
                        justifyContent="center"
                        display="flex"
                        flexDirection="column"
                    >
                        <VStack
                            as="form"
                            w={{ base: "80%", md: 400 }}
                            mx="auto"
                            spacing="50px"
                            justifyContent="center"
                            onSubmit={formik.handleSubmit}
                        >
                            <LogoAnimated word="Quiz"/>
                            <TextField
                                name="code"
                                placeholder="Entrer votre code..."
                                autoFocus
                            />
                            <Button type="submit">Entrer</Button>
                        </VStack>
                    </Box>
                )}
            </Formik>
            <Footer>
                <Text>
                    <SmallText>
                        Crée ton propre Quiz GRATUITEMENT sur <Link href="#" color={color}>Quiz.com</Link>
                    </SmallText>
                </Text>
                <Text>
                    <SmallText>
                        <Link href="#" color={color}>Conditions d'utilisation</Link> | <Link href="#" color={color}>Confidentialité</Link>
                    </SmallText>
                </Text>
            </Footer>
        </>
    )
}

export default Home