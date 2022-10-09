import * as Yup from "yup"
import { Box, useColorModeValue, VStack } from "@chakra-ui/react"
import { Formik } from "formik"
import { useContext } from "react"

import Button from "./core/Button"
import { Footer, Link, SmallText, Text } from "../../styles/HomeStyled"
import LogoAnimated from "../LogoAnimated"
import questions from "../../questions.json"
import { QuizContext } from "../../contexts/Quiz"
import TextField from "../TextField"

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
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        width="45vw"
                    >
                        <VStack
                            as="form"
                            justifyContent="center"
                            mx="auto"
                            onSubmit={formik.handleSubmit}
                            spacing="50px"
                            w={{ base: "80%", md: 400 }}
                        >
                            <LogoAnimated word="Quiz"/>
                            <TextField
                                autoFocus
                                name="code"
                                placeholder="Entrer votre code..."
                            />
                            <Button type="submit">Entrer</Button>
                        </VStack>
                    </Box>
                )}
            </Formik>
            <Footer>
                <Text>
                    <SmallText>
                        Crée ton propre Quiz GRATUITEMENT sur &nbsp;
                        <Link
                            color={color}
                            href="#"
                        >
                            Quiz.com
                        </Link>
                    </SmallText>
                </Text>
                <Text>
                    <SmallText>
                        <Link
                            color={color}
                            href="#"
                        >
                            Conditions d'utilisation
                        </Link>
                        &nbsp;|&nbsp;
                        <Link
                            color={color}
                            href="#"
                        >
                            Confidentialité
                        </Link>
                    </SmallText>
                </Text>
            </Footer>
        </>
    )
}

export default Home