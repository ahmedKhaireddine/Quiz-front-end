// import styled from "styled-components"
import { useFormik, Formik, Form, Field } from "formik"
import * as Yup from "yup"

import Logo from "../Logo"
import {
  FormErrorMessage,
  FormHelperText,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button
} from "@chakra-ui/react"
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
                    <FormControl isInvalid={formik.errors.code}>
                        <FormLabel>Code</FormLabel>
                        <Field
                            as={Input}
                            name="code"
                            placeholder="Entrer votre code..."
                            color="white"
                        />
                        <FormErrorMessage>{formik.errors.code}</FormErrorMessage>
                    </FormControl>
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