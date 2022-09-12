import { useFormik, Formik, Form, Field } from "formik"
import * as Yup from "yup"
import {
    VStack,
    Button,
    Heading
} from "@chakra-ui/react"
import styled from "styled-components"

import TextField from "../TextField"
import Logo from "../Logo"
import ButtonComponent from "./core/ButtonComponent"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Home = () => {
    return (
        <Formik
            initialValues={{code: ""}}
            validationSchema={Yup.object({
                code: Yup
                    .string()
                    .required("Vous devez entrer un code")
            })}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2))
                actions.resetForm()
            }}
        >
            {(formik) => ( 
                <Box>
                    <Logo />
                    <Heading
                        as='h1' 
                        // size='lg'
                        color="#F1F1F1"
                        mt="60px"    
                    >Bienvenue! Veuillez entrer votre code pour commencer le Quiz!</Heading>
                    <VStack
                        as="form"
                        w={{ base: "90%", md: 300 }}
                        mx="auto"
                        spacing="30px"
                        // h="100vh"
                        justifyContent="center"
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            name="code"
                            placeholder="Entrer votre code..."
                            mt="30px"
                        />
                        <ButtonComponent>Entrer</ButtonComponent>
                    </VStack>
                </Box>   
            )}
        </Formik>
    )
}

export default Home