import * as Yup from "yup"
import { Box, Heading, VStack } from "@chakra-ui/react"
import { Formik } from "formik"
import { useContext } from "react"

import Button from "./core/Button"
import { QuizContext } from "../../contexts"
import TextField from "../TextField"

const PlayerInfos = (props) => {
    const { setInfos, setStep } = useContext(QuizContext)

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: ""
            }}
            onSubmit={(values, actions) => {
                setInfos(values)
                setStep(3)
                actions.resetForm()
            }}
            validationSchema={Yup.object({
                firstName: Yup
                    .string()
                    .max(15, "*15 caractères maximum")
                    .required("*Veuillez renseigner un prénom"),
                lastName: Yup
                    .string()
                    .max(15, "*15 caractères maximum")
                    .required("*Veuillez renseigner un nom"),
            })}
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
                        mx="auto"
                        onSubmit={formik.handleSubmit}
                        spacing="30px"
                        textAlign="center"
                        w={{ base: "80%" }}
                    >
                        <Heading
                            as="h1"
                            mb="30px"
                            tabIndex="-1"
                        >
                            Tu y es presque...
                        </Heading>
                        <TextField
                            autoFocus
                            name="lastName"
                            placeholder="Nom..."
                        />
                        <TextField
                            name="firstName"
                            mb="30px"
                            placeholder="Prénom..."
                        />
                        <Button type="submit">Entrer</Button>
                    </VStack>
                </Box>
            )}
        </Formik>
    )
}

export default PlayerInfos