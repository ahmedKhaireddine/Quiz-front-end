// import styled from "styled-components"
import { useFormik, Formik, Form, Field } from "formik"
import * as Yup from "yup"
import {
    VStack,
    Button
} from "@chakra-ui/react"

import TextField from "../TextField"
import Logo from "../Logo"
import InputComponent from "../InputComponent"
import ButtonComponent from "./core/ButtonComponent"

// const Box = styled.div`
//     height: 400px;
//     width: 300px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction column;
// `

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
                <VStack
                    as="form"
                    mx="auto"
                    w={{ base: "90%", md: 300 }}
                    h="100vh"
                    justifyContent="center"
                    onSubmit={formik.handleSubmit}
                >
                    <Logo/>
                    <TextField 
                        name="code"
                        placeholder="Entrer votre code..."
                    />
                    <Button
                        type="submit"
                        variant="outline"
                        colorScheme="teal"
                    >
                        Entrer
                    </Button>
                </VStack>
            )}
        </Formik>
    )
}

export default Home