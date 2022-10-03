import { useContext } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { Box, Heading, VStack } from "@chakra-ui/react"

import Button from "./core/Button"
import { QuizContext } from "../../contexts/Quiz"
import TextField from "../TextField"

const PlayerInfos = (props) => {
    const { setStep, setInfos } = useContext(QuizContext)

    // const focus = () => {
    //     document.getElementById("nom").focus();
    // }

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
                setInfos(values)
                setStep(3)
                actions.resetForm()
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
                        w={{ base: "80%" }}
                        mx="auto"
                        spacing="30px"
                        onSubmit={formik.handleSubmit}
                        textAlign="center"
                    >
                        <Heading
                            as="h1"
                            mb="30px"
                            tabIndex="-1"
                        >
                            Tu y es presque...
                        </Heading>
                        <TextField
                            name="lastName"
                            placeholder="Nom..."
                            />
                        <TextField
                            // id="nom"
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