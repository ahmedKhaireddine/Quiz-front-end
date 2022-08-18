import React from "react"
import styled from "styled-components"
import * as Yup from "yup"
import { useFormik } from "formik"

import QuizLayout from "../layouts/QuizLayout"
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

const PlayerInfos = (props) => {
    const formik = useFormik({

        initialValues: {
            nom: '',
            prenom: ''
        },
        validationSchema: Yup.object({
            nom: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('*Champs requis'),
            prenom: Yup.string()
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
                <Form onSubmit={formik.handleSubmit}>
                    <label htmlFor="nom">Nom</label><br></br>
                    <input
                        id="nom"
                        name="nom"
                        type="text"
                        placeholder='Nom'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nom}
                        error={formik.errors.nom}
                    />
                    {formik.touched.nom && formik.errors.nom ? (
                        <div>{formik.errors.nom}</div>
                    ) : null}

                    <label htmlFor="prenom">Prénom</label><br></br>
                    <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        placeholder='Prénom'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.prenom}
                        error={formik.errors.prenom}
                    />
                    {formik.touched.prenom && formik.errors.prenom ? (
                        <div>{formik.errors.prenom}</div>
                    ) : null}

                    <Button type="submit">Entrer</Button>
                </Form>
            </Box>
        </QuizLayout>
    )
}

export default PlayerInfos