import styled from "styled-components"
import { Formik, Form, Field } from "formik"

import Logo from "../Logo"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
//   FormHelperText,
} from "@chakra-ui/react"
import InputComponent from "../InputComponent"
import ButtonComponent from "./core/ButtonComponent"

const Box = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction column;
`
// const Form = styled.div`
//     display: flex;
//     flex-direction column;
//     justify-content: center;
//     align-items: center;
//     label {
//         font-size: 25px;
//         color: #F1F1F1;
//         margin: 10px auto;
//     }
//     input {
//         height: 30px;
//         width: 200px;
//         margin: 30px 0;
//         padding-left: 10px;
//     }
// `

const Home = (props) => {

    function validateCode(value) {
        let error

        if (!value) {
            error = "Un code est requis"
        } else if (value.toLowerCase() !== "") {      // (value.toLowerCase() !== code)
            error = "Le code saisi est invalide"
        }
        return error
    }

    return (
        <>
            <Box>
                <Logo/>
                    <Formik
                        // initialValues={{ name: "Votre code" }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2))
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    >
                    {(props) => (
                        <Form name="code" validate={validateCode}>
                            {({ field, form }) => (
                                <Field>
                                    <FormControl isInvalid={form.errors.code && form.touched.code}>
                                        <FormLabel>Code</FormLabel>
                                        <InputComponent
                                            {...field}
                                            placeholder="Entrer votre code..."
                                        />
                                        <FormErrorMessage>{}</FormErrorMessage>
                                    </FormControl>
                                </Field>
                            )}
                            <ButtonComponent
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                Entrer
                            </ButtonComponent>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}

export default Home