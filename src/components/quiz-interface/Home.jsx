import React from "react"
import styled from "styled-components"
import * as Yup from "yup"
import { useFormik } from "formik"

import QuizLayout from "../layouts/QuizLayout"
import Logo from "../Logo"
import Button from "../Button"

const Box = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction column;
    border: 1px solid white;
`
const Form = styled.div`
    display: flex;
    flex-direction column;
    justify-content: center;
    align-items: center; 
    label {
        font-size: 25px;
        color: #F1F1F1;
        margin: 10px auto;
    }
    input {
        height: 30px;
        width: 200px;
        border-radius: 5px;
        margin: 30px 0;
    }
`

const Home = (props) => {
    const formik = useFormik({

        initialValues: {
            code: '',
        },
        validationSchema: Yup.object({
            code: Yup.number()
                .max(15, 'Must be 15 characters or less')
                .required('*Champs requis'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <QuizLayout>
            <Box>
                <Logo/>
                <Form onSubmit={formik.handleSubmit}>
                    <label htmlFor="code">Code</label><br></br>
                    <input
                        id="code"
                        name="code"
                        type="number"
                        placeholder='Entrer le code ici'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.code}
                        error={formik.errors.code}
                    />

                    {formik.touched.code && formik.errors.code ? (
                        <div>{formik.errors.code}</div>
                    ) : null}

                    <Button type="submit">Entrer</Button>
                </Form>
            </Box>
        </QuizLayout>
    )
}

export default Home