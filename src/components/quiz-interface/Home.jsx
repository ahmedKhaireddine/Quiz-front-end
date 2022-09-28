import { useContext } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { VStack, Box } from "@chakra-ui/react"

import Button from "./core/Button"
import LogoAnimated from "../LogoAnimated"
import questions from "../../questions.json"
import { QuizContext } from "../../contexts/Quiz"
import TextField from "../TextField"

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