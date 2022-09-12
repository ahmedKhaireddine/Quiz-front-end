import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import {
    VStack,
    Button,
    Heading
} from "@chakra-ui/react"
import styled from "styled-components"

import TextField from "../TextField"
import ButtonComponent from "./core/ButtonComponent"

const Box = styled.div`
    display: flex;
    flex-direction column;
`

const PlayerInfos = (props) => {

    return (
        <Formik
            initialValues={{
                nom: "",
                prenom: ""
            }}
            validationSchema={Yup.object({
                nom: Yup
                    .string()
                    .max(15, "*15 caractères maximum")
                    .required("*Veuillez renseigner un nom"),
                prenom: Yup
                    .string()
                    .max(15, "*15 caractères maximum")
                    .required("*Veuillez renseigner un prénom"),
            })}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2))
                actions.resetForm()
            }}
        >
            {(formik) => ( 
                <Box>
                    <Heading
                        as='h1' 
                        color="#F1F1F1"
                        mb="60px"    
                    >
                        Dernière étape avant de commencer
                    </Heading>
                    <VStack
                        as="form"
                        w={{ base: "90%", md: 300 }}
                        mx="auto"
                        spacing="30px"
                        justifyContent="center"
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            name="nom"
                            placeholder="Nom..."
                        />
                        <TextField
                            name="prenom"
                            placeholder="Prenom..."
                        />
                        <ButtonComponent px={ 10 }>Entrer</ButtonComponent>
                    </VStack>
                </Box>   
            )}
        </Formik>
    )
}

export default PlayerInfos